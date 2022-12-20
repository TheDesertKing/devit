import mongoose from "mongoose"

const projectChema = new mongoose.Schema({
  //user submitted
  project_name: String,
  project_description: String,
  // project_tags: [String], Not yet implemented! not required
  github_repo_link: String,

  //client side generated
  idea_id: Number,
  submitter_id: Number,

  //server side generated
  project_id: Number,
  programming_languages: [String],
  date_created: Date,
  date_changed: Date,
  // company_support: Number, Not yet implemented! not required
})

module.exports =
  mongoose.models.Project || mongoose.model("Project", projectChema)
