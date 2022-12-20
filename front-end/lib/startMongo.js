import project from "@/models/Project"
import mongoose from "mongoose"

const startMongoAndGetModels = async () => {
  if (mongoose.connection.readyState) {
    await mongoose
      .connect(process.env.MONGODB_STRING)
      .catch((error) => console.log("MongoDB connection error: ", error))
  }
  return [project]
}

export default startMongoAndGetModels
