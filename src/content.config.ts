import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const sections = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/sections' }),
  schema: z.object({
    title: z.string().optional(),
    order: z.number(),
  }),
})

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),

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
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/pages' }),
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
