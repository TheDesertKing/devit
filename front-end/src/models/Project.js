const mongoose = require("mongoose");

const userChema = new mongoose.Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("User", userChema);
