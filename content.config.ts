import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    contents: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        draft: z.boolean(),
        date: z.date(),
        tag: z.array(z.string())
      })
    }),
    articles: defineCollection({
      type: 'page',
      source: 'articles/**/*.md',
      schema: z.object({
        draft: z.boolean(),
        date: z.date(),
        tag: z.array(z.string())
      })
    }),
  }
});
