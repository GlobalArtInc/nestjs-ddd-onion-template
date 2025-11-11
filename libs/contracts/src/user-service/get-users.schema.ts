import z from 'zod';
import { userSchema } from './user.schema';

export const getUsersSchema = z.object({});
export const getUsersResponseSchema = z.object({
  users: z.array(userSchema),
});

export type GetUsersRequest = z.infer<typeof getUsersSchema>;
export type GetUsersResponse = z.infer<typeof getUsersResponseSchema>;
