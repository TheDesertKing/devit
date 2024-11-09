import project from "@/models/Project"
import idea from "@/models/Idea"
import user from "@/models/User"
import mongoose from "mongoose"

const createCollections = (models: mongoose.Model<any>[]) => {
  user.createCollection()
}

const startMongo = async () => {
  if (!mongoose.connection.readyState) {
    mongoose.set("strictQuery", false)
    mongoose.set("sanitizeFilter", true)
    await mongoose
      .connect(process.env.MONGODB_STRING)
      .catch((error) => console.log("MongoDB connection error: ", error))
    await createCollections([user, idea, project])
  }

  return { user: user, idea: idea, project: project }
}

type IModels = Awaited<ReturnType<typeof startMongo>>
export type { IModels }
export default startMongo
