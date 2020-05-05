const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateCode(data) {
  let errors = {};
  data = !isEmpty(data) ? data : "";

//   if (!Validator.isEmpty(data)) {
//     errors.code = "Code is required";
//   }

  if (!Validator.isLength(data, { min: 6, max: 6 })) {
    errors.code = "Code is incorrect";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
