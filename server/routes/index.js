var express = require("express");
var router = express.Router();
const typeRouter = require("./typesRouter");
const brandRouter = require("./brandRouter");
const userRouter = require("./userRouter");
const deviceRouter = require("./deviceRouter");

router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/user", userRouter);
router.use("/device", deviceRouter);

module.exports = router;
