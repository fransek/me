import { defineCollection, z } from 'astro:content'

const sections = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
  }),
})

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      thumbnail: image().optional(),
      alt: z.string().optional(),
      description: z.string(),
    }),
})

const pages = defineCollection({
  type: 'data',
  schema: z.object({
    pages: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        route: z.string(),
        slug: z.string(),
        excludeFromNav: z.boolean().optional(),
      })
    ),
  }),
})

export const collections = {
  pages,
  sections,
  blog,
}
