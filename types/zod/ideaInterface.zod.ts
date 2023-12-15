import { z } from "zod"

export const newIdeaSchema = z.object({
	//required
	idea_title: z.string().min(4).max(40),
	submitter_id: z.string(),
	//optional
	idea_description: z.string().max(140).optional(),
	idea_tags: z.string().array().max(7).optional(),
	// related_ideas: z.array(z.string()).max(4).optional(), Not Yet Implemented!
	related_projects: z.string().array().max(4).optional(),
	links: z.string().url().array().max(4).optional(),
})

export const ideaSchema = newIdeaSchema.extend({
	idea_id: z.number(),
	_id: z.string(),
	createdAt: z.date(),
	updatedAt: z.date()
})

export type INewIdeaSchema = z.input<typeof newIdeaSchema>