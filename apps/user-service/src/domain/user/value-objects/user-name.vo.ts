import { ValueObject } from '@globalart/ddd';
import { z } from 'zod';

export const userNameSchema = z.string().min(1).max(255);

export class UserName extends ValueObject<string> {
  constructor(value: string) {
    super({ value });
  }

  static create(value: string): UserName {
    return new UserName(value);
  }
}
