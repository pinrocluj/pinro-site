import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    imagine: z.string().optional(),
    descriere: z.string().optional(),
  }),
});

const portofoliu = defineCollection({
  type: 'content',
  schema: z.object({
    titlu: z.string(),
    suport: z.enum(['beton', 'metal', 'ambele']),
    imagine_principala: z.string(),
    galerie: z.array(z.string()).optional(),
    an: z.number().optional(),
    descriere: z.string().optional(),
  }),
});

export const collections = { blog, portofoliu };
