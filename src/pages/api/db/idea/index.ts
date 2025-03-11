import startMongo from "@/lib/startMongo"
import createDocument from "@/lib/createDocument"
import { NextApiRequest, NextApiResponse } from "next" // Types
import { parseNewIdea } from "@/lib/parse/parseNewIdea"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const models = await startMongo()

  if (req.method == "POST") {
    if (req.headers["content-type"] !== "application/json") {
      res.setHeader("Accept-Post", "application/json")
      res.status(415).send("This endpoint only supports data in JSON format")
      return
    }

    createDocument(res, req.body, "idea", models)
  }

  if (req.method == "PUT") {
    //get document by user id
    //change document according to changed data
    //insert it to db
  }

  if (req.method == "DELETE") {
    //remove document by id
  }
  res.status(400).send("Something went wrong!")
}
