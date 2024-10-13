import { z } from "zod"

// Blog şeması
export const blogSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  categories: z.array(z.string()),
  author: z.string(),
  language: z.string(),
  date: z.string(),
  featureImage: z.string().optional(),
})

export type Blog = z.infer<typeof blogSchema>