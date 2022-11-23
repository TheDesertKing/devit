const mongoose = require("mongoose")

const startMongo = async (debug = false) => {
  await mongoose.connect(process.env.MONGODB_STRING)
  if (debug === true) {
    const code = mongoose.connection.readyState
    if (code === 1) {
      console.log("MongoDB: Connection Succsessful")
    } else {
      console.log("MongoDB: Something went wrong, Code: " + code)
    }
  }
}

export default startMongo
