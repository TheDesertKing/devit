import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  //user submitted
  username: String,
  user_description: String,
  user_tags: [String],
  github_account_link: String,

  //client side generated

  //server side generated
  user_id: Number,
  following: [Number],
  followed_by: [Number],
  follower_count: number,
  authored_ideas: [Number],
  owned_projects: [Number],
  watched_projects: [Number],
  date_joined: Date,
  date_updated: Date,
  // company_id: Number, Not yet implemented!
})

module.exports = mongoose.models.User || mongoose.model("User", userSchema)
