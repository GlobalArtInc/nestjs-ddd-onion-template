import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestMicroservice } from '@nestjs/common';
import { MicroserviceOptions } from '@nestjs/microservices';
import { getAppGrpcConfig } from '@app/infrastructure';
import { join } from 'path';

class Bootstrap {
  private app: INestMicroservice;

  async init() {
    this.app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      getAppGrpcConfig({
        host: '0.0.0.0',
        port: Number(process.env.USER_SERVICE_PORT),
        package: 'user.service',
        protoPath: join(
          __dirname,
          '..',
          '..',
          '..',
          'protos',
          'user',
          'service.proto',
        ),
      }),
    );
  }

  async start() {
    await this.app.listen();
    console.log(`User service is running`);
  }
}

(async () => {
  const bootstrap = new Bootstrap();
  await bootstrap.init();
  await bootstrap.start();
})();
