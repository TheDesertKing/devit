import mongoose from "mongoose"

const projectChema = new mongoose.Schema(
  {
    //user submitted
    project_name: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 40,
      unique: true,
      index: true,
    },

    project_description: {
      type: String,
      maxLength: 140,
      default: "Derp! default description",
    },

    project_tags: {
      type: [String],
      default: [],
      validate: (arr) => arr.length <= 7,
    },

    github_repo_link: String,

    related_ideas: {
      type: [String],
      default: [],
      validate: (arr) => arr.length <= 4,
    },

    submitter_id: {
      type: String,
      required: true,
    },

    //server side generated
    project_id: {
      type: Number,
    },

    programming_languages: {
      type: [String],
      default: [],
    },

    // company_support: Number, Not yet implemented! not required
  },
  { timestamps: true }
)

// module.exports =
//   mongoose.models.Project || mongoose.model("Project", projectChema)
export default mongoose.models.Project ||
  mongoose.model("Project", projectChema)
