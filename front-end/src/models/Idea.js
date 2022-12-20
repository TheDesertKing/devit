import mongoose from "mongoose"

const ideaSchema = new mongoose.Schema({
  //user submitted
  idea_title: String,
  idea_description: String,
  // idea_tags: [String], Not yet implemented!
  related_ideas: [Number],
  links: [String],

  //client side generated
  related_projects: [String],
  submitter_id: Number,

  //server side generated
  idea_id: Number,
  date_created: Date,
  date_changed: Date,
  // company_support: Number, Not yet implemented! not required
})

module.exports = mongoose.models.Idea || mongoose.model("Idea", ideaSchema)
