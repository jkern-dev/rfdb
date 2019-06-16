const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.handle = validText(data.handle) ? data.handle : ''
  data.email = validText(data.email) ? data.email : ''
  data.gender = validText(data.gender) ? data.gender : ''
  data.age = validText(data.age) ? data.age : ''
  data.password = validText(data.password) ? data.password : ''

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Handle is required";
  }

  if (!Validator.isLength(data.handle, { min: 2, max: 30 })) {
    errors.handle = "Handle must be between 2 and 30 characters";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Gender is required";
  }

  if (Validator.isEmpty(data.age)) {
    errors.age = "Age is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 characters";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}