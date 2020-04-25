const axios = require("axios");
const helperApiUrl = require("../constant").helperApiUrl;

exports.actives = (req, res) => {
  const param = "stock/actives";
  axios
    .get(`${helperApiUrl}${param}`)
    .then((response) => {
      res.json({
        data: response.data.mostActiveStock,
      });
    })
    .catch((err) => res.status(500).json({ err: err }));
};

exports.gainers = (req, res) => {
  const param = "stock/gainers";
  axios
    .get(`${helperApiUrl}${param}`)
    .then((response) =>
      res.json({
        data: response.data.mostGainerStock,
      })
    )
    .catch((err) => res.status(500).json({ err: err }));
};

exports.losers = (req, res) => {
  const param = "stock/losers";
  axios
    .get(`${helperApiUrl}${param}`)
    .then((response) =>
      res.json({
        data: response.data.mostLoserStock,
      })
    )
    .catch((err) => res.status(500).json({ err: err }));
};
