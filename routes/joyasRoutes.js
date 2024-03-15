const express = require("express");
const joyasController = require("../controllers/joyasController.js");
const router = express.Router();
const activityLogger = require("../utils/activityLogger.js");

router.use(activityLogger);

router.get("/", joyasController.queryData);

router.get("/joya/:id", joyasController.byId);

router.get("/filtros", joyasController.queryDataFilter);

module.exports = router;
