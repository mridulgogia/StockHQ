const axios = require("axios");
const helperApiUrl = require("../constant").helperApiUrl;

exports.actives = (req, res) => {
  const param = "stock/actives";
  axios.get(`${helperApiUrl}${param}`).then((response) => {
    res.json({
      data: response.data,
    });
  });
};

exports.gainers = (req, res) => {
  const param = "stock/gainers";
  axios.get(`${helperApiUrl}${param}`).then((response) =>
    res.json({
      data: response.data,
    })
  );
};

exports.losers = (req, res) => {
  const param = "stock/losers";
  axios.get(`${helperApiUrl}${param}`).then((response) =>
    res.json({
      data: response.data,
    })
  );
};