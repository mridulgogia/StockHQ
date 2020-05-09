const SUser = require("../models/user");
const follow = require("../models/followStock");
exports.follow = (req, res) => {
  let error = {};

  follow
    .findOne({ _id: req.user.id })
    .then((followArr) => {
      const stockName = req.params.id;
      if (followArr) {
        let list = followArr.follows;
        const indexOfStockName = list.indexOf(stockName);

        if (indexOfStockName > 0) {
          list = list.filter((item) => item !== stockName);
          follow
            .updateOne({ _id: req.user.id }, { follows: list })
            .then(() =>
              res.json({
                isFollowed: false,
                stockName: stockName,
              })
            )
            .catch((err) =>
              res.status(400).json({
                isFollowed: false,
                error: err,
              })
            );
        } else {
          list = [...list, stockName];
          follow
            .updateOne({ _id: req.user.id }, { follows: list })
            .then((success) =>
              res.json({
                isFollowed: true,
                stockName: stockName,
              })
            )
            .catch((err) =>
              res.status(400).json({
                isFollowed: false,
                error: err,
              })
            );
        }
      } else {
        SUser.findOne({ _id: req.user.id }).then((user) => {
          if (user.mobile.length === 0) {
            error.number = "User is not verified";
            return res.status(400).json(error);
          } else {
            const newFollow = new follow({
              _id: req.user.id,
              follows: [stockName],
            });

            newFollow
              .save()
              .then((followArr) => {
                res.json({ isFollowed: true, stockName: stockName });
              })
              .catch((err) =>
                res.status(400).json({ isFollowed: false, error: err })
              );
          }
        });
      }
    })
    .catch((err) => res.status(400).json({ error: err }));
};

exports.displayList = (req, res) => {
  follow
    .findOne({ _id: req.user.id })
    .then((followingList) => {
      if (followingList) {
        res.json({ follows: followingList.follows });
      } else {
        res.status(404).json({ follows: [] });
      }
    })
    .catch((err) => res.status(400).json({ error: err }));
};

exports.checkFollow = (req, res) => {
  follow
    .findOne({ _id: req.user.id })
    .then((followingList) => {
      if (followingList) {
        if (followingList.follows.indexOf(req.params.id) > 0) {
          res.json({
            isFollowed: true,
            stockName: req.params.id,
          });
        } else {
          res.json({
            isFollowed: false,
            stockName: req.params.id,
          });
        }
      } else {
        res.json({
          isFollowed: false,
          stockName: req.params.id,
        });
      }
    })
    .catch((err) =>
      res.status(400).json({
        error: err,
        isFollowed: false,
      })
    );
};
