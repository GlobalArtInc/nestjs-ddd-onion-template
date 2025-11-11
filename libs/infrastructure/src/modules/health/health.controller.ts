import { Controller, Get, Res } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { FastifyReply } from 'fastify';

@Controller({
  path: 'health',
})
@ApiExcludeController()
export class HealthController {
  @Get('liveness')
  liveness(@Res() res: FastifyReply) {
    return res.send('OK');
  }

  @Get('readiness')
  readiness(@Res() res: FastifyReply) {
    return res.send('OK');
  }
}
