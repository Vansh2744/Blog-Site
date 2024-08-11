const mongoose = require("mongoose");

const { Schema } = mongoose;
const schema = new mongoose.Schema({
  title: { type: Schema.Types.ObjectId, ref: "actors" },
  discription: String,
});

module.exports = mongoose.model("blogs", schema);
