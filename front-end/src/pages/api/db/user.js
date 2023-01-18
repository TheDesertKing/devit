import startMongoAndGetModels from "@/lib/startMongo"

export default async function handler(req, res) {
  const models = await startMongoAndGetModels()
  if (req.method == "GET") {
    //get document by user id
    //return user data obj
  }
  if (req.method == "POST") {
    //create new user using data
    //insert it to db
  }
  if (req.method == "PUT") {
    //get document by user id
    //change document according to changed data
    //insert it to db
  }
  if (req.method == "DELETE") {
    //remove document by id
  }
}
