import { Module } from '@nestjs/common';

import { CustomLogger } from '@common/index';

@Module({
  providers: [CustomLogger],
  exports: [CustomLogger],
})
export class LoggerModule {}
