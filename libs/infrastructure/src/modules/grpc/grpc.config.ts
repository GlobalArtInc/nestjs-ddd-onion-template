import { ReflectionService } from '@grpc/reflection';
import { GrpcOptions, Transport } from '@nestjs/microservices';

interface GrpcConfig {
  host?: string;
  port: number;
  package: string;
  protoPath: string;
}
export const getAppGrpcConfig = (options: GrpcConfig): GrpcOptions => {
  return {
    transport: Transport.GRPC,
    options: {
      url: `${options.host || '0.0.0.0'}:${options.port}`,
      package: options.package,
      protoPath: options.protoPath,
      onLoadPackageDefinition: (pkg, server) => {
        new ReflectionService(pkg).addToServer(server);
      },
    },
  };
};
