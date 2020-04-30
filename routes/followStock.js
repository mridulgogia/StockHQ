const express = require("express");
const passport = require("passport");
const followStockCtrl = require("../controllers/followStock");

const router = express.Router();

router.get(
  "/followStock/:id",
  passport.authenticate("jwt", { session: false }),
  followStockCtrl.follow
);
router.get(
  "/followStockDisplay",
  passport.authenticate("jwt", { session: false }),
  followStockCtrl.displayList
);
router.get(
  "/followStockCheck/:id",
  passport.authenticate("jwt", { session: false }),
  followStockCtrl.checkFollow
);


module.exports = router;
