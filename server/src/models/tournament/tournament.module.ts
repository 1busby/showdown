import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TournamentsResolver } from './tournament.resolver';
import { TournamentsService } from './tournament.service';
import { TournamentSchema } from './tournament.schema';
import { SharedModule } from '@shared/index';
import { MatchModule } from '@models/match/match.module';

@Module({
  imports: [
    SharedModule,
    MongooseModule.forFeature([
      { name: 'Tournament', schema: TournamentSchema },
    ]),
    MatchModule,
  ],
  providers: [TournamentsResolver, TournamentsService],
})
export class TournamentsModule {}
