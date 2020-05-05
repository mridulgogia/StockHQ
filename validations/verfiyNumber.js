const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateNumber(data) {
  let errors = {};
  data = !isEmpty(data) ? data : "";

  if (!Validator.isMobilePhone(data)) {
    errors.number = "Number is invalid";
  }

  // if (!Validator.isEmpty(data)) {
  //   errors.email = "Number is required";
  // }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
