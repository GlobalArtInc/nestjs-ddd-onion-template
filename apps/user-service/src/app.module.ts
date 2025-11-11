import { Module } from '@nestjs/common';
import { ConfigModule } from '@app/nestjs';
import { configurations } from './infrastructure/configs';
import { UserModule } from './application/user/user.module';

@Module({
  imports: [
    ConfigModule.register({
      configurations: [...configurations],
    }),
    UserModule,
  ],
})
export class AppModule {}
