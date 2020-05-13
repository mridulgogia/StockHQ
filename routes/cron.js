const express = require("express");
const cronJob = require("../controllers/cronJob");

const router = express.Router();

router.get("/cron", cronJob.alert);

module.exports = router