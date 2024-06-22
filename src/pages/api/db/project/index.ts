import { parseNewProject } from "@/lib/parse/parseNewProject"
import startMongo from "@/lib/startMongo"
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

    const newProjectData = parseNewProject(req.body)

    let error
    try {
      await models["project"].create(newProjectData)
    } catch (err: any) {
      error = err
    }

    if (error === undefined) {
      if (process.env.NODE_ENV == "development") {
        res
          .status(200)
          .send(JSON.stringify(newProjectData) + typeof newProjectData)
        return
      } else {
        res.status(200).send("Project successfully added")
        return
      }
    } else if (error.code == "11000") {
      res.status(409).send("Duplicate project name")
      return
    } else {
      console.log("MongoDB Error creating document: ", error)
      res.status(400).send("Error creating project document")
      return
    }
  }
  res.status(400).send("Something went wrong!")
}
