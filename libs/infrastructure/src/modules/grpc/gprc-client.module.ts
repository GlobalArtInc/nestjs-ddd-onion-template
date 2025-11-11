import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientGrpc,
  ClientsModule,
  GrpcOptions,
  Transport,
} from '@nestjs/microservices';
import { UserGrpcClient } from './clients/user-grpc-client';
import { GRPC_CLIENT_TOKENS, GRPC_PROVIDER } from './grpc.di-tokens';

@Module({})
export class GrpcClientModule {
  static forRoot(): DynamicModule {
    const clients = [
      {
        name: GRPC_PROVIDER.USER_SERVICE,
        useFactory: async (
          configService: ConfigService,
        ): Promise<GrpcOptions> => {
          const config = configService.getOrThrow('grpc.user');
          return {
            transport: Transport.GRPC,
            options: {
              url: `${config.host || 'localhost'}:${config.port}`,
              package: config.package,
              protoPath: config.protoPath,
            },
          };
        },
        inject: [ConfigService],
      },
    ];

    const clientProviders: Provider[] = [
      {
        provide: GRPC_CLIENT_TOKENS.USER_SERVICE_CLIENT,
        useFactory: (client: ClientGrpc) => new UserGrpcClient(client),
        inject: [GRPC_PROVIDER.USER_SERVICE],
      },
    ];

    return {
      module: GrpcClientModule,
      imports: [ClientsModule.registerAsync(clients)],
      providers: [...clientProviders],
      exports: [...clientProviders],
      global: true,
    };
  }
}
