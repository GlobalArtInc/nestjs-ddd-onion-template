import { Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { BaseGrpcClient } from './base-grpc-client';
import { UserService } from '@app/contracts';

@Injectable()
export class UserGrpcClient extends BaseGrpcClient {
  constructor(client: ClientGrpc) {
    super(client);
  }

  getUserService(): UserService {
    return this.getGrpcService<UserService>('UserService');
  }
}
