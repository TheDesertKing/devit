import { newProjectSchema, INewProjectSchema } from "@/types/zod/projectInterface.zod"

const parseNewProject = (reqBody: object): INewProjectSchema | void => {
	const parsedData = newProjectSchema.safeParse(reqBody)
	if (parsedData["success"]) {
		const newProjectData: INewProjectSchema = parsedData["data"];
		return newProjectData
	} else { return }
}

export { parseNewProject }