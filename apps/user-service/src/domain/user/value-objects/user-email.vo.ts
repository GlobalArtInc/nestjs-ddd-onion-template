import { ValueObject } from '@globalart/ddd';
import { z } from 'zod';

export const userEmailSchema = z.email();

export class UserEmail extends ValueObject<string> {
  constructor(value: string) {
    super({ value });
  }

  static create(value: string): UserEmail {
    return new UserEmail(value);
  }
}
