import { Module } from '@nestjs/common';

import { CustomLogger } from '@common/custom-logger';

@Module({
  providers: [CustomLogger],
  exports: [CustomLogger],
})
export class LoggerModule {}
