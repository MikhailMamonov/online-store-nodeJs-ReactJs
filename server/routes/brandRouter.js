var express = require("express");
var router = express.Router();

const brandController = require("./../controllers/BrandController");
const checkRoleMiddldware = require("./../middleware/chekRoleMiddldeware");

router.get("/", brandController.getAll);
router.post("/", checkRoleMiddldware("ADMIN"), brandController.create);

module.exports = router;
