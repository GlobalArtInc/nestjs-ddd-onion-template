import { z } from 'zod';

import { userEmailSchema, userIdSchema, userNameSchema } from './value-objects';

export const userQuerySchema = z.object({
  id: userIdSchema,
  name: userNameSchema,
  email: userEmailSchema,
});
export type UserQuery = z.infer<typeof userQuerySchema>;
