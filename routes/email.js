const express = require("express");
const router = express.Router();

const updateEmail = require("../controllers/email.js");

router
    .route("/")
    .put(updateEmail);

module.exports = router;