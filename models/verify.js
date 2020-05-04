const mongoose = require("mongoose");

const VerifySchema = mongoose.Schema({
  number: {
    type: String,
    // required: true,
    unique: true,
  },
  status: {
    type: String,
    // required: true,
  },
  sid: {
    type: String,
    // required: true,
  },
});

module.exports = mongoose.model("Verify", VerifySchema);