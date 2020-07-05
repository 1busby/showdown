import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DateScalar } from '../../common/scalars/date.scalar';
import { TournamentsResolver } from './match.resolver';
import { TournamentsService } from './match.service';
import { TournamentSchema } from './match.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Tournament', schema: TournamentSchema }])],
  providers: [TournamentsResolver, TournamentsService, DateScalar],
})
export class TournamentsModule {}
