const express = require("express");
const { signin, signup } = require("../Controllers/Auth");

const {
  isRequestValidated,
  validateSignupRequest,
  validateSigninRequest,
} = require("../Validator/validator");
const router = express.Router();

router.post("/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/signin", validateSigninRequest, isRequestValidated, signin);

module.exports = router;
