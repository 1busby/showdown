import { Module } from '@nestjs/common';

import { DateScalar } from './scalars/date.scalar';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [LoggerModule],
  exports: [LoggerModule],
  providers: [DateScalar],
})
export class CommonModule {}
