const axios = require("axios");
const helperApiUrl = require("../constant").helperApiUrl;

exports.profile = (req, res) => {
  const param = `company/profile/${req.params.id}`;
  axios
    .get(`${helperApiUrl}${param}`)
    .then((response) => res.json({ data: response.data }))
    .catch((err) => res.status(500).json({ err: err }));
};

exports.listAll = (req, res) => {
  const param = `stock/real-time-price`;
  axios
    .get(helperApiUrl + param)
    .then((response) =>
      res.json({
        data: response.data,
      })
    )
    .catch((err) => res.status(500).json({ err: err }));
};

exports.currentPrice = (req, res) => {
  const param = `stock/real-time-price/${req.params.id}`;
  axios
    .get(helperApiUrl + param)
    .then((response) => res.json({ data: response.data }))
    .catch((err) => res.status(500).json({ err }));
};
