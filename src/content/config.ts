import { defineCollection, z } from 'astro:content'

const introduction = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
})

const project = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    link: z.string().url().optional(),
  }),
})

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    thumbnail: z.string().optional(),
    alt: z.string().optional(),
    description: z.string(),
  }),
})

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
  }),
})

const education = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    institution: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
  }),
})

const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  route: z.string(),
  slug: z.string(),
})

const pages = defineCollection({
  type: 'data',
  schema: z.object({
    home: pageSchema,
    education: pageSchema,
    work: pageSchema,
    projects: pageSchema,
    blog: pageSchema,
  }),
})

export const collections = {
  pages,
  introduction,
  project,
  work,
  education,
  blog,
}
