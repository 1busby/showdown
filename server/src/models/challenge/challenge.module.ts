import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ChallengesResolver } from './challenge.resolver';
import { ChallengeService } from './challenge.service';
import { ChallengeSchema } from './challenge.schema';
import { SharedModule } from '@shared/index';
import { MatchModule } from '@models/match/match.module';

@Module({
  imports: [
    SharedModule,
    MongooseModule.forFeature([
      { name: 'Challenge', schema: ChallengeSchema },
    ]),
    MatchModule,
  ],
  providers: [ChallengesResolver, ChallengeService],
})
export class ChallengesModule {}
