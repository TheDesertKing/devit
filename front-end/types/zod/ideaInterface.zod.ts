import { z } from "zod"

export const newIdeaSchema = z.object({
	idea_title: z.string().max(30),
	idea_description: z.string().max(140).optional(),
	idea_tags: z.array(z.string()).max(7).optional(),
	submitter_id: z.string(),
	related_ideas: z.array(z.string()).max(4).optional(),
	related_projects: z.array(z.string()).max(4).optional(),
	links: z.array(z.string().url()).max(4).optional(),
})

export const ideaSchema = newIdeaSchema.extend({
	_id: z.string(),
	createdAt: z.date(),
	updatedAt: z.date()
})

export type INewIdeaSchema = z.input<typeof newIdeaSchema>