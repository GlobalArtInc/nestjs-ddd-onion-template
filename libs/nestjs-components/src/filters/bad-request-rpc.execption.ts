import { ArgumentsHost, BadRequestException, Catch, RpcExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements RpcExceptionFilter<RpcException> {
  constructor(private readonly showLogger = false) {}

  catch(exception: RpcException | BadRequestException, host: ArgumentsHost): Observable<any> {
    if (this.showLogger) {
      console.error(exception);
    }
    return host.switchToRpc().getData();
  }
}
