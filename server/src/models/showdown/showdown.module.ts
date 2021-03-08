import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ShowdownResolver } from './showdown.resolver';
import { ShowdownService } from './showdown.service';
import { ShowdownSchema } from './showdown.schema';
import { SharedModule } from '@shared/index';
import { MatchModule } from '@models/match/match.module';

@Module({
  imports: [
    SharedModule,
    MongooseModule.forFeature([
      { name: 'Showdown', schema: ShowdownSchema },
    ]),
    MatchModule,
  ],
  providers: [ShowdownResolver, ShowdownService],
})
export class ShowdownModule {}
