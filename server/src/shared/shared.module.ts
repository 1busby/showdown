import { Module } from '@nestjs/common';

import { DateScalar } from './scalars/date.scalar';
import { LoggerModule } from './logger/logger.module';
import { WebPushService } from './services/web-push.service';

@Module({
  imports: [LoggerModule],
  exports: [LoggerModule, WebPushService],
  providers: [DateScalar, WebPushService],
})
export class SharedModule {}
