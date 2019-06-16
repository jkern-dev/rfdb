const express = require('express');
const router = express.Router();
const passport = require('passport');

const Question = require('../../models/Question');
const validateQuestion = require('../../validation/question');

// get all questions
router.get('/', (req,res) => {
  Question.find()
    .sort({date: -1})
    .then(questions => res.json(questions))
    .catch(err => res.status(404).json({ noQuestionsFound: "No questions found"}));
});

// get user questions
router.get('/user/:user_id', (req,res) => {
  Question.find({ user: req.params.user_id })
    .sort({date: -1})
    .then(questions => res.json(questions))
    .catch(err => res.status(404).json({noQuestionsFound: "No questions found"}));
});

// get specific question
router.get('/:id', (req,res) => {
  Question.findById(req.params.id)
    .then(question => res.json(question))
    .catch(err => res.status(404).json({noQuestionFound: "No question found"}));
});

// create a question
router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req,res) => {
    const { errors, isValid } = validateQuestion(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newQuestion = new Question({
      user: req.user.id,
      body: req.body.body
    });

    newQuestion.save()
      .then(question => res.json(question));
});

module.exports = router;
