import project from "@/models/Project"
import idea from "@/models/Idea"
import user from "@/models/User"
import mongoose from "mongoose"

const startMongoAndGetModels = async () => {
  if (!mongoose.connection.readyState) {
    await mongoose
      .connect(process.env.MONGODB_STRING)
      .catch((error) => console.log("MongoDB connection error: ", error))
  }
  return { user: user, idea: idea, project: project }
}

export default startMongoAndGetModels
