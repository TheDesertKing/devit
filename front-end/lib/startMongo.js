const mongoose = require("mongoose")

const startMongo = async (verbose = false) => {
  const code = mongoose.connection.readyState
  console.log(code)
  if (code != 1) {
    await mongoose.connect(process.env.MONGODB_STRING)
    if (verbose === true) {
      if (code === 1) {
        console.log("MongoDB: Connection Succsessful")
      } else {
        console.log("MongoDB: Something went wrong, Code: " + code)
      }
    }
  }
}

export default startMongo
