import { parseNewUser } from "@/lib/parse/parseNewUser"
import { parseNewProject } from "@/lib/parse/parseNewProject"
import { parseNewIdea } from "@/lib/parse/parseNewIdea"
import { NextApiResponse } from "next" // Types
import type { IModels } from "@/lib/startMongo"

type IDocType = "user" | "project" | "idea"

const createDocument = async (
  res: NextApiResponse,
  requestData: object,
  docType: IDocType,
  models: IModels
) => {
  const parse = {
    user: parseNewUser,
    project: parseNewProject,
    idea: parseNewIdea,
  }

  const newDocData = parse[docType](requestData)

  if (newDocData === undefined) {
    res.status(400).send("Error while parsing form data")
    return
  }

  let error
  try {
    await models[docType].create(newDocData)
  } catch (err: any) {
    error = err
  }

  if (error === undefined) {
    if (process.env.NODE_ENV == "development") {
      res.status(200).send(JSON.stringify(newDocData) + typeof newDocData)
      return
    } else {
      res.status(200).send(`${docType} successfully added`)
      return
    }
  } else if (error.code == "11000") {
    res.status(409).send(`Duplicate ${docType} name`)
    return
  } else {
    console.log("MongoDB Error creating document: ", error)
    res.status(400).send(`Error creating ${docType} document`)
    return
  }
}
