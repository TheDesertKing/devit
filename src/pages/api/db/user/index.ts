import startMongo from "@/lib/startMongo"
import { NextApiRequest, NextApiResponse } from 'next' // Types
import { parseNewUser } from "@/lib/parse/parseNewUser"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const models = await startMongo()

	if (req.method == "POST") {
		const newUserData = parseNewUser(req.body)
		if (newUserData === undefined) {
			res.status(400).send("Error while parsing form data")
			return
		}


		if (req.headers['content-type'] !== 'application/json') {
			res.setHeader("Accept-Post", "application/json")
			res.status(415).send("This endpoint only supports data in JSON format")
			return
		}

		await models['user'].create(newUserData)

		if (process.env.NODE_ENV == "development") {
			res.status(200).send(JSON.stringify(newUserData) + typeof (newUserData))
		} else {
			res.status(200).send("User successfully added")
		}
	}

}