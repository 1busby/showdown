import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TournamentsResolver } from './tournament.resolver';
import { TournamentsService } from './tournament.service';
import { TournamentSchema } from './tournament.schema';
import { CommonModule } from '@common/index';

@Module({
  imports: [
    CommonModule,
    MongooseModule.forFeature([
      { name: 'Tournament', schema: TournamentSchema },
    ]),
  ],
  providers: [TournamentsResolver, TournamentsService],
})
export class TournamentsModule {}
