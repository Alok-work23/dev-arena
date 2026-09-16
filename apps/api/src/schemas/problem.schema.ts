import { z } from "zod";

export const createProblemSchema = z.object({
  title: z.string().min(3).max(100),

  slug: z
    .string()
    .min(3)
    .max(100)
    .regex(/^[a-z0-9-]+$/),

  difficulty: z.enum(["easy", "medium", "hard"]),

  description: z.string().min(10),

  tags: z.array(z.string()).min(1),
});

export const updateProblemSchema = createProblemSchema.partial();