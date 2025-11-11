import { Inject } from '@nestjs/common';
import { GRPC_CLIENT_TOKENS } from '../grpc.di-tokens';

export const InjectUserService = () =>
  Inject(GRPC_CLIENT_TOKENS.USER_SERVICE_CLIENT);
