const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateQuestionInput(data) {
  let errors = {};
  
  data.body = validText(data.body) ? data.body : ''

  if (Validator.isEmpty(data.body)) {
    errors.body = "Must include question body";
  }

  

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};