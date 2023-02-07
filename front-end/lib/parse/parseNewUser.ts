import { newUserSchema, INewUserSchema } from "@/types/zod/userInterface.zod"

const parseNewUser = (reqBody: object): INewUserSchema | void => {
	const parsedData = newUserSchema.safeParse(reqBody)
	if (parsedData["success"]) {
		const newUserData: INewUserSchema = parsedData["data"];
		return newUserData
	} else { return }
}

export { parseNewUser } 
