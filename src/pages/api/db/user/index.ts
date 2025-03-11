import startMongo from "@/lib/startMongo"
import createDocument from "@/lib/createDocument"
import { NextApiRequest, NextApiResponse } from "next" // Types

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

    createDocument(res, req.body, "user", models)
  }
  res.status(400).send("Something went wrong!")
}
