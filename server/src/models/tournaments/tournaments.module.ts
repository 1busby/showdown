import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DateScalar } from '../../common/scalars/date.scalar';
import { TournamentsResolver } from './tournaments.resolver';
import { TournamentsService } from './tournaments.service';
import { TournamentSchema } from './tournament.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Tournament', schema: TournamentSchema }])],
  providers: [TournamentsResolver, TournamentsService, DateScalar],
})
export class TournamentsModule {}
