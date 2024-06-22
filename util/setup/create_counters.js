import counter from "@/models/Counter"
import mongoose from "mongoose"

const createCounter = async (docType) => {}

const createCounters = async () => mongoose.set("strictQuery", false)
mongoose.set("sanitizeFilter", true)
await mongoose
  .connect(process.env.MONGODB_STRING)
  .catch((error) => console.log("MongoDB connection error: ", error))

objectDocTypes = ["idea", "project", "user"]
for (const docType in objectDocTypes) {
  counterData = await counter.findOne({ schema_type: docType }).exec()
  if (counterData === null) {
    createCounter(docType)
  }
}

// Run this once to create counters
