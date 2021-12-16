var express = require("express");
var router = express.Router();
const userController = require("./../controllers/UserController");
const authMiddleware = require("./../middleware/authMiddleware");

router.get("/auth", authMiddleware, userController.check);
router.post("/registration", userController.registration);
router.post("/login", userController.login);

module.exports = router;
