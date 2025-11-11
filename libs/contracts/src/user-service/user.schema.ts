import { z } from 'zod';

export const userSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string(),
});

export type User = z.infer<typeof userSchema>;
