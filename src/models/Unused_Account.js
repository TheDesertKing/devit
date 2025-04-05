import mongoose from "mongoose"

const accountSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      maxLength: 30,
    },

    is_GitHub_connected: {
      type: Bool,
      default: false,
    },

    is_company_account: {
      type: Bool,
      default: false,
    },
  },
  { timestamps: true }
)

module.exports =
  mongoose.models.Account || mongoose.model("Account", ideaSchema)
