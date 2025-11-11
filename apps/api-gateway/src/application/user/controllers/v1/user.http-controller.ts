import { Controller, Get } from '@nestjs/common';
import { UserService } from '../../user.service';

@Controller({
  path: 'users',
  version: 'v1',
})
export class UserHttpController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }
}
