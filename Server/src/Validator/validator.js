const { check, validationResult } = require("express-validator");

exports.validateSignupRequest = [
  check("username").notEmpty().withMessage("username is Required"),
  check("role").notEmpty().withMessage("Role of the User should be defined"),
  check("email").isEmail().withMessage("Valid Email is Required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 character"),
  check("contactnumber")
    .isLength({ min: 10, max: 10 })
    .withMessage("Password must of 10 character"),
];

exports.validateSigninRequest = [
  check("email").isEmail().withMessage("Valid Email is Required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 character"),
];
