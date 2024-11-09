import startMongo from "@/lib/startMongo"
import { NextApiRequest, NextApiResponse } from "next" // Types
import { parseNewUser } from "@/lib/parse/parseNewUser"

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

    createDocument
  }
  res.status(400).send("Something went wrong!")
}
