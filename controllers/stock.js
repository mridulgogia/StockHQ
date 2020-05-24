require("dotenv").config();

const axios = require("axios");
const helperApiUrl = require("../constant").helperApiUrl;

const financeApikey = process.env.financeApikey;

exports.actives = (req, res) => {
  const param = "stock/actives" + "?apikey=" + financeApikey;
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
  const param = "stock/gainers" + "?apikey=" + financeApikey;
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
  const param = "stock/losers" + "?apikey=" + financeApikey;
  axios
    .get(`${helperApiUrl}${param}`)
    .then((response) =>
      res.json({
        data: response.data.mostLoserStock,
      })
    )
    .catch((err) => res.status(500).json({ err: err }));
};
