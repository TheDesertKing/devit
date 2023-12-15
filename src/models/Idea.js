import mongoose from "mongoose"

const ideaSchema = new mongoose.Schema(
  {
    //user submitted
    idea_title: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 40,
      unique: true,
      index: true,
    },

    submitter_id: {
      type: String,
      required: true,
    },

    idea_description: {
      type: String,
      maxLength: 140,
      default: "Derp! default description",
    },

    idea_tags: {
      type: [String],
      default: [],
      validate: (arr) => arr.length <= 7,
    },

    // related_ideas: {
    //   type: [String],
    //   default: [],
    //   validate: (arr) => arr.length <= 4,
    // }, Not Yet Implemeted!

    related_projects: {
      type: [String],
      default: [],
      validate: (arr) => arr.length <= 4,
    },

    links: {
      type: [String],
      default: [],
      validate: (arr) => arr.length <= 4,
    },

    //server side generated
    idea_id: {
      type: Number,
    },

    // company_support: Number, Not yet implemented! not required
  },
  { timestamps: true }
)

// module.exports = mongoose.models.Idea || mongoose.model("Idea", ideaSchema)
export default mongoose.models.Idea || mongoose.model("Idea", ideaSchema)
