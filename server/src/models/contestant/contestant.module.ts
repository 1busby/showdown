import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SharedModule } from '@shared/index';
import { ContestantResolver } from './contestant.resolver';
import { ContestantSchema } from './contestant.schema';

@Module({
  imports: [
    SharedModule,
    MongooseModule.forFeature([
      { name: 'Contestant', schema: ContestantSchema },
    ]),
  ],
  providers: [ContestantResolver],
})
export class ContestantModule {}
