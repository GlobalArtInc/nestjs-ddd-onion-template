import { DynamicModule, Module } from '@nestjs/common';
import { ConfigFactory, ConfigService, ConfigModule as NestConfigModule } from '@nestjs/config';

export interface ConfigModuleOptions {
  configurations: ConfigFactory[];
}

@Module({})
export class ConfigModule {
  static register(options: ConfigModuleOptions): DynamicModule {
    return {
      module: NestConfigModule,
      global: true,
      imports: [
        NestConfigModule.forRoot({
          isGlobal: true,
          load: [...options.configurations],
        }),
      ],
      providers: [ConfigService],
      exports: [ConfigService],
    };
  }
}
