import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    //user submitted
    username: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    user_description: {
      type: String,
      default: "Derp! default description",
    },

    user_tags: {
      type: [String],
      required: true,
    },

    github_account_link: {
      type: String,
      unique: true,
    },

    //server side generated

    following: {
      type: [Number],
      default: [],
    },

    followed_by: {
      type: [Number],
      default: [],
    },

    follower_count: {
      type: Number,
      default: 0,
    },

    authored_ideas: {
      type: [Number],
      default: [],
    },

    owned_projects: {
      type: [Number],
      default: [],
    },

    watched_projects: {
      type: [Number],
      default: [],
    },
    // company_id: Number, Not yet implemented!
  },
  { timestamps: true }
)

export type IUserSchema = typeof userSchema

export default mongoose.models.User || mongoose.model("User", userSchema)
