const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const VerifySchema = mongoose.Schema({
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
  },
  sid: {
    type: String,
    required: true,
  },
});

VerifySchema.plugin(uniqueValidator);

module.exports = mongoose.model("Verify", VerifySchema);