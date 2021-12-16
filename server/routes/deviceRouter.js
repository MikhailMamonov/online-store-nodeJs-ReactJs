var express = require("express");
var router = express.Router();

const deviceController = require("./../controllers/DeviceController");
const checkRoleMiddldware = require("./../middleware/chekRoleMiddldeware");

router.get("/", deviceController.getAll);
router.get("/:id", deviceController.getOne);
router.post("/", checkRoleMiddldware("ADMIN"), deviceController.create);
module.exports = router;
