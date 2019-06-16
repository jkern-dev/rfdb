const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateQuestionInput(data) {
  let errors = {};
  
  data.body = validText(data.body) ? data.body : ''

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};