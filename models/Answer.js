const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  user: {
    _id: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    age: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      required: true
    }
  },
  question: {
    type: Schema.Types.ObjectId,
    ref: 'question'
  },
  answer: {
    type: Number,
    required: true
  }
});

module.exports = Answer = mongoose.model('answer', AnswerSchema);