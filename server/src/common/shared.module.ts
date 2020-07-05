import { Module } from '@nestjs/common';

import { DateScalar } from './scalars/date.scalar';

@Module({
  exports: [DateScalar],
  providers: [DateScalar],
})
export class SharedModule {}
