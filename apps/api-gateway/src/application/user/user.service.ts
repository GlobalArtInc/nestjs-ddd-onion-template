import { InjectUserService, UserGrpcClient } from '@app/infrastructure';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectUserService() private readonly userService: UserGrpcClient,
  ) {}

  async getUsers() {
    return this.userService.getUserService().getUsers({});
  }
}
