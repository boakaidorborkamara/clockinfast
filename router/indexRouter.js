const express = require("express");
const router = express.Router();

const { displayHomepage } = require("../controller/indexController");

router.get("/", displayHomepage);

module.exports = router;
