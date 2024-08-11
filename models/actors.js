const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  age: String,
  imgUrl: String,
});

module.exports = mongoose.model("actors", schema);
