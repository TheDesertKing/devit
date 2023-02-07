import { newIdeaSchema, INewIdeaSchema } from "@/types/zod/ideaInterface.zod"

const parseNewIdea = (reqBody: object): INewIdeaSchema | void => {
	const parsedData = newIdeaSchema.safeParse(reqBody)
	if (parsedData["success"]) {
		const newIdeaData: INewIdeaSchema = parsedData["data"];
		return newIdeaData
	} else { return }
}

export { parseNewIdea }