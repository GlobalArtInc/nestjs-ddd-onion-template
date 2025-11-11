import { Module } from '@nestjs/common';
import { UserModule } from './application/user/user.module';
import { GrpcClientModule } from '@app/infrastructure';
import { ConfigModule } from '@app/nestjs';
import { configurations } from './infrastructure/configs';

@Module({
  imports: [
    ConfigModule.register({
      configurations: [...configurations],
    }),
    GrpcClientModule.forRoot(),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
