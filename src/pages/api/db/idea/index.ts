import startMongo from "@/lib/startMongo"
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
      console.log(7)
      res.status(415).send("This endpoint only supports data in JSON format")
      return
    }

    const newIdeaData = parseNewIdea(req.body)
    if (newIdeaData === undefined) {
      console.log(9)
      res.status(400).send("Error while parsing data")
      return
    }

    let error
    try {
      await models["idea"].create(newIdeaData)
    } catch (err: any) {
      error = err
    }

    if (error === undefined) {
      if (process.env.NODE_ENV == "development") {
        res
          .status(200)
          .send(
            "Idea successfully added\n" +
              JSON.stringify(newIdeaData) +
              typeof newIdeaData
          )
        return
      } else {
        res.status(200).send("Idea successfully added")
        return
      }
    } else if (error.code == "11000") {
      res.status(409).send("Duplicate idea name")
      return
    } else {
      console.log("MongoDB Error creating document: ", error)
      res.status(400).send("Error creating idea document")
      return
    }

    // await models["idea"].create(newIdeaData, (err: any) => {
    //   if (err === null) {
    //     if (process.env.NODE_ENV == "development") {
    //       res.status(200).send(JSON.stringify(newIdeaData) + typeof newIdeaData)
    //       return
    //     } else {
    //       res.status(200).send("Idea successfully added")
    //       return
    //     }
    //   } else if (err.code == "11000") {
    //     res.status(409).send("Duplicate idea name")
    //     return
    //   } else {
    //     res.status(400).send("Error creating idea document")
    //     return
    //   }
    // })
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
