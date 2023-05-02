import startMongo from "@/lib/startMongo"
import { NextApiRequest, NextApiResponse } from 'next' // Types
import { parseNewUser } from "@/lib/parse/parseNewUser"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const models = await startMongo()

	if (req.method == "GET") {
		const lookupID = req.query["id"]

		if (lookupID === undefined) {
			res.status(400).send("Missing `id` url query parameter")
			return
		}

		if (typeof lookupID === "object") {
			// in case of GET ... /db/project?id=123&id=321 -> lookupID = ['123','321']
			res.status(400).send("Multiple `id` url query parameters aren't allowed")
			return
		}

		// const userData = await models["project"].find({ project_id: lookupID }).exec()
		const userData = await models["project"].findOne({ project_name: "banana" }).exec()
		// console.log(await models["project"].listIndexes())
		console.log(userData)
		if (userData === null) {
			res.status(400).send("Project not found")
			return
		}

		res.status(200).json(userData)
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