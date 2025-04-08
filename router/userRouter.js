const express = require("express");
const router = express.Router();

const { createUserController } = require("../controller/userController");

router.post("/users", createUserController);

module.exports = router;
