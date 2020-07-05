import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MatchResolver } from './match.resolver';
import { MatchService } from './match.service';
import { MatchSchema } from './match.schema';
import { CommonModule } from '@common/index';

@Module({
  imports: [
    CommonModule,
    MongooseModule.forFeature([{ name: 'Match', schema: MatchSchema }]),
  ],
  providers: [MatchResolver, MatchService],
})
export class MatchModule {}
