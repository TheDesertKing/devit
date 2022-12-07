const mongoose = require("mongoose")

const projectChema = new mongoose.Schema({
  name: String,
  id: Number,
})

module.exports =
  mongoose.models.Project || mongoose.model("Project", projectChema)
