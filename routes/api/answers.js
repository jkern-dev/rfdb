const express = require('express');
const router = express.Router();
const passport = require('passport');

const Answer = require('../../models/Answer');

// get all answers
router.get('/', (req,res) => {
  Answer.find()
    .then(answers => res.json(answers))
    .catch(err => res.status(404).json({noAnswersFound: "No answers found"}))
});

// answers from specific user
router.get('/users/:user_id', (req,res) => {
  Answer.find({user: req.params.user_id})
    .then(answers => res.json(answers))
    .catch(err => res.status(404).json({noAnswersFound: "User has not answered yet"}))
});

// answers for specific question
router.get('/questions/:question_id', (req,res) => {
  Answer.find({question: req.params.question_id})
    .then(answers => res.json(answers))
    .catch(err => res.status(404).json({noAnswersFound: "Question has no answers"}))
});

// User answer for specific question
router.get('/questions/:question_id/:user_id', (req,res) => {
  Answer.find({
    question: req.params.question_id,
    user: req.params.user_id
  }).then(answer => res.json(answer))
  .catch(err => res.status(404).json({noAnswerFound: "Question not yet answered"}))
});

// create a new answer
router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req,res) => {
    const newAnswer = new Answer({
      user: {
        _id: req.user.id,
        age: req.user.age,
        handle: req.user.handle,
        gender: req.user.gender
      },
      question: req.body.question,
      answer: req.body.answer
    });

    newAnswer.save()
      .then(answer => res.json(answer));
});

module.exports = router;