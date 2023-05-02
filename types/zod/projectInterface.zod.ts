import { z } from "zod"

export const newIdeaSchema = z.object({
	//required
	project_name: z.string().min(4).max(40),
	github_repo_link: z.string().url().startsWith("https://github.com/"),
	submitter_id: z.string(),
	//optional
	project_description: z.string().max(140).optional(),
	project_tags: z.string().array().max(7).optional(),
	programing_languages: z.string().array().optional()
})

export const ideaSchema = newIdeaSchema.extend({
	_id: z.string(),
	createdAt: z.date(),
	updatedAt: z.date(),
	project_id: z.number(),
})

export type INewIdeaSchema = z.input<typeof newIdeaSchema>