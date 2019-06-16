const express = require("express");
const router = express.Router();
const user = require('../../models/user');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const validateRegisterInput = require('../../validation/register');
const validateLogin = require('../../validation/login');

router.get("/test", (req, res) => {
  res.json({ msg: "This is the user route" });
});

// Register new user
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  user.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already registered" })
      } else {
        const newUser = new User({
          handle: req.body.handle,
          email: req.body.email,
          age: req.body.age,
          gender: req.body.gender,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then((user) => res.json(user))
              .catch(err => console.log(err));
          })
        })
      }
    })
})

// Login to existing user account
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLogin(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ email: "Email does not own account" });
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              handle: user.handle,
              email: user.email,
              age: user.age,
              gender: user.gender
            }
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              }
            )
          } else {
            return res.status(400).json({ password: "Incorrect password" })
          }
        })
    })
})

module.exports = router;