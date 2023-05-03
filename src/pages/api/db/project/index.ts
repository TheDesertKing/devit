import { parseNewProject } from "@/lib/parse/parseNewProject"
import startMongo from "@/lib/startMongo"
import { NextApiRequest, NextApiResponse } from 'next' // Types

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const models = await startMongo()

	if (req.method == "POST") {
		const newProjectData = parseNewProject(req.body)
		if (newProjectData === undefined) {
			res.status(400).send("Error while parsing data")
			return
		}

		if (req.headers['content-type'] !== 'application/json') {
			res.setHeader("Accept-Post", "application/json")
			res.status(415).send("This endpoint only supports data in JSON format")
			return
		}

		await models['project'].create(newProjectData)

		if (process.env.NODE_ENV == "development") {
			res.status(200).send(JSON.stringify(newProjectData) + typeof (newProjectData))
			return
		} else {
			res.status(200).send("Project successfully added")
			return
		}
	}
	res.status(400).send("Something went wrong!")
}
