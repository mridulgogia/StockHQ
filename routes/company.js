const express = require("express");
const companyCtrl = require("../controllers/company");

const router = express.Router();

router.get("/profile/:id", companyCtrl.profile);
router.get("/list", companyCtrl.listAll);
router.get("/currentPrice", companyCtrl.currentPrice);
router.get("/quote/:id", companyCtrl.quote);
router.get('/historicalChart/:duration/:id', companyCtrl.historicalChart);

module.exports = router;
