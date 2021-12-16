var express = require("express");
var router = express.Router();

const typeController = require("./../controllers/TypeController");
const checkRoleMiddldware = require("./../middleware/chekRoleMiddldeware");

router.get("/", typeController.getAll);
router.post("/", checkRoleMiddldware("ADMIN"), typeController.create);

module.exports = router;
