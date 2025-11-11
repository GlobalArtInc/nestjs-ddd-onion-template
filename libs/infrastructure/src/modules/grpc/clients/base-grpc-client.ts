import { Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export abstract class BaseGrpcClient {
  protected client: ClientGrpc;

  constructor(client: ClientGrpc) {
    this.client = client;
  }

  protected getGrpcService<T extends object = Record<string, unknown>>(serviceName: string): T {
    return this.client.getService<T>(serviceName);
  }
}
