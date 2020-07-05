import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DateScalar } from '../../shared/scalars/date.scalar';
import { TournamentsResolver } from './tournament.resolver';
import { TournamentsService } from './tournament.service';
import { TournamentSchema } from './tournament.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Tournament', schema: TournamentSchema }])],
  providers: [TournamentsResolver, TournamentsService, DateScalar],
})
export class TournamentsModule {}
