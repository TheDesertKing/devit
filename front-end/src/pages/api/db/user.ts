import startMongoAndGetModels from "@/lib/startMongo"
import { NextApiRequest, NextApiResponse } from 'next' // Types
import { User, NewUser } from "@/types/userInterface"
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

const isContentTypeJSON = (req: NextApiRequest): boolean => {
  console.log(req.headers['content-type'])
  return req.headers['content-type'] === 'application/json'
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const models = await startMongoAndGetModels()

  if (req.method == "GET") {
    //get document by user id
    //return user data obj
  }


  if (req.method == "POST") {
    const newUserData = parseNewUser(req.body)
    if (typeof newUserData === undefined) {
      panic(res, "Error while parsing form data", 400)
      return
    }


    console.log(req.headers['content-type'])
    // const newUser = await models['user'].create(newUserData)

    if (process.env.NODE_ENV == "development") {
      res.status(200).send(JSON.stringify(newUserData) + typeof (newUserData))
    } else {
      res.status(200).send("User successfully added")
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