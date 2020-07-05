import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DateScalar } from '../../shared/scalars/date.scalar';
import { TournamentsResolver } from './match.resolver';
import { MatchService } from './match.service';
import { MatchSchema } from './match.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Tournament', schema: MatchSchema }])],
  providers: [TournamentsResolver, MatchService, DateScalar],
})
export class TournamentsModule {}
