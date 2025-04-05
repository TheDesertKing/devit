import mongoose from "mongoose"

const counterSchema = new mongoose.Schema(
  {
    schema_type: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    counter: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
)

export default mongoose.models.Counter ||
  mongoose.model("Counter", counterSchema)
