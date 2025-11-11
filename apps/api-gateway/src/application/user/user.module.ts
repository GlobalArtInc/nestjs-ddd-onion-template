import { Module } from '@nestjs/common';
import { UserHttpController } from './controllers/v1/user.http-controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserHttpController],
  providers: [UserService],
})
export class UserModule {}
