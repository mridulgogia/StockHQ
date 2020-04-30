const mongoose = require("mongoose");

const followSchema = mongoose.Schema({
    follows: {
        type: Array,
        required: true  
    }
});

module.exports = mongoose.model("follow",followSchema)