import { ID } from '@globalart/ddd';
import { z } from 'zod';

export const userIdSchema = z.number().int().positive();

export class UserId extends ID<number> {
  constructor(value: number) {
    super(value);
  }
}
