import { Module } from '@nestjs/common';

import { ContestantResolver } from './contestant.resolver';
import { SharedModule } from '@shared/index';

@Module({
  imports: [
    SharedModule,
  ],
  providers: [ContestantResolver],
})
export class ContestantModule {}
