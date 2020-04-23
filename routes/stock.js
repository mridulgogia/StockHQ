const express = require("express");
const stockCtrl = require("../controllers/stock");

const router = express.Router();

router.get("/actives", stockCtrl.actives);
router.get("/gainers", stockCtrl.gainers);
router.get("/losers", stockCtrl.losers);

module.exports = router;
