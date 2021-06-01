const mongoose = require("mongoose");

const custom = new mongoose.Schema({
  Guild: String,
  Command: String,
  Response: String,
});

module.exports = mongoose.model("custom", custom);
