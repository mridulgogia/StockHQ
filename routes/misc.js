const express = require("express");
const passport = require("passport");
const router = express.Router();

const misc = require("../controllers/misc");

router.get(
  "/isVerified",
  passport.authenticate("jwt", { session: false }),
  misc.isVerified
);

router.get(
  "/mobile",
  passport.authenticate("jwt", { session: false }),
  misc.mobile
);

module.exports = router;
