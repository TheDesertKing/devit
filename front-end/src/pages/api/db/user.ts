import startMongoAndGetModels from "@/lib/startMongo"
import { NextApiRequest, NextApiResponse } from 'next' // Types
import { userSchema, newUserSchema, INewUserSchema } from "@/types/zod/userInterface.zod"


const panic = (res: NextApiResponse, errorMessage: string, errorCode: number = 400): void => {
  res.status(errorCode).send(errorMessage)
}

const parseNewUser = (reqBody: object): INewUserSchema | void => {
  const parsedData = newUserSchema.safeParse(reqBody)
  if (parsedData["success"]) {
    const newUserData: INewUserSchema = parsedData["data"];
    return newUserData
  } else { return }
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const models = await startMongoAndGetModels()

  if (req.method == "GET") {
    //get document by user id
    //return user data obj
  }


  if (req.method == "POST") {
    const newUserData = parseNewUser(req.body)
    if (newUserData === undefined) {
      panic(res, "Error while parsing form data", 400)
      return
    }


    if (req.headers['content-type'] === 'application/json') {
      await models['user'].create(newUserData)

      if (process.env.NODE_ENV == "development") {
        res.status(200).send(JSON.stringify(newUserData) + typeof (newUserData))
        return
      } else {
        res.status(200).send("User successfully added")
        return
      }
    } else {
      res.setHeader("Accept-Post", "application/json")
      res.status(415).send("This endpoint only supports data in JSON format")
      return
    }
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

export { parseNewUser }