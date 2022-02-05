const express = require("express");
const router = express.Router();

const updateEmail = require("../controllers/email.js");

router
    .put(updateEmail);

module.exports = router;