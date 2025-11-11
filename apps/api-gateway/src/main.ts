import { NestFactory } from '@nestjs/core';
import { NestApplication } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';

class Bootstrap {
  private app: NestApplication;

  async init() {
    this.app = await NestFactory.create<NestApplication>(AppModule);
    this.app.enableVersioning({
      type: VersioningType.URI,
      defaultVersion: '1',
      prefix: '',
    });
  }

  async setupSwagger() {
    const config = new DocumentBuilder()
      .setTitle('API Gateway')
      .setDescription('API Gateway for the application')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(this.app, config);
    SwaggerModule.setup('/', this.app, document);
  }

  async start() {
    await this.app.listen(process.env.API_PORT);
    console.log(`Server is running on port ${process.env.API_PORT}`);
  }
}

(async () => {
  const bootstrap = new Bootstrap();
  await bootstrap.init();
  await bootstrap.setupSwagger();
  await bootstrap.start();
})();
