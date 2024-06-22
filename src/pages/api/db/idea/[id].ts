import startMongo from "@/lib/startMongo"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const models = await startMongo()

  if (req.method == "GET") {
    const lookupID = req.query["id"]

    if (lookupID === undefined) {
      res.status(400).send("Missing `id` url query parameter")
      return
    }

    if (typeof lookupID === "object") {
      // in case of GET ... /db/idea?id=123&id=321 -> lookupID = ['123','321']
      res.status(400).send("Multiple `id` url query parameters aren't allowed")
      return
    }

    if (!Number.isInteger(parseInt(lookupID))) {
      res.status(400).send("`id` url query must be an integer")
      return
    }

    const ideaData = await models["idea"].findOne({ idea_id: lookupID }).exec()
    console.log(ideaData)
    if (ideaData === null) {
      res.status(400).send("Idea not found")
      return
    }

    res.status(200).json(ideaData)
    return
  }

  if (req.method == "PUT") {
    //get idea by id
    //change idea according to changed data
    //insert it to db
  }

  if (req.method == "DELETE") {
    //remove idea by id
  }
}
