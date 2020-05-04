const express = require("express");

const passport = require("passport");
const verify = require("../controllers/verify");

const router = express.Router();

router.post(
  "/mobile/number",
  passport.authenticate("jwt", { session: false }),
  verify.number
);

router.post(
  "/mobile/code",
  passport.authenticate("jwt", { session: false }),
  verify.code
);

module.exports = router;
