const express = require("express");
const router = express.Router();

const signupMethods = require("../controllers/signup.js");

router
    .route("/")
    .post(signupMethods);

module.exports = router;