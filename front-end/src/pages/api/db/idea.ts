import startMongo from "@/lib/startMongo"
import { NextApiRequest, NextApiResponse } from 'next' // Types
import { parseNewIdea } from "@/lib/parse/parseNewIdea"
// import { ideaSchema, newIdeaSchema, INewIdeaSchema } from "@/types/zod/ideaInterface.zod"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const models = await startMongo()

	if (req.method == "GET") {
		//* Return all ideas authored by the user (max 10)
		// const ideas = models["idea"].find({submitter_id: userID})
	}


	if (req.method == "POST") {
		//* Create and save a new idea

		const newIdeaData = parseNewIdea(req.body)
		if (newIdeaData === undefined) {
			res.status(400).send("Error while parsing form data")
			return
		}



		if (req.headers['content-type'] !== 'application/json') {
			res.setHeader("Accept-Post", "application/json")
			res.status(415).send("This endpoint only supports data in JSON format")
		}

		await models['idea'].create(newIdeaData)

		if (process.env.NODE_ENV == "development") {
			res.status(200).send(JSON.stringify(newIdeaData) + typeof (newIdeaData))
			return
		} else {
			res.status(200).send("Idea successfully added")
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
