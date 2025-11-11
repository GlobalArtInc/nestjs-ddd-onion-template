import { UserEmail, UserId, UserName } from './value-objects';

export class User {
  public id!: UserId;
  public name!: UserName;
  public email!: UserEmail;

  static empty() {
    return new User();
  }

  toJSON() {
    return {
      id: this.id.unpack(),
      name: this.name.unpack(),
      email: this.email.unpack(),
    };
  }
}
