import { registerAs } from '@nestjs/config';
import { join } from 'path';

type GrpcConfig = {
  host: string;
  port: number;
  package: string;
  protoPath: string;
};

export const grpcConfig = registerAs<Record<string, GrpcConfig>>(
  'grpc',
  () => ({
    user: {
      host: process.env.GRPC_USER_SERVICE_HOST,
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
    },
  }),
);
