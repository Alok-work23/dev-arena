import { z } from "zod";

export const createProblemSchema = z.object({
  title: z.string().min(3).max(100),

  slug: z
    .string()
    .min(3)
    .max(100)
    .regex(/^[a-z0-9-]+$/),

  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]),

  description: z.string().min(10),

  tags: z.array(z.string()).optional(),
});

export const updateProblemSchema = createProblemSchema.partial();