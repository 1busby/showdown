import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TournamentResolver } from './tournament.resolver';
import { TournamentService } from './tournament.service';
import { TournamentSchema } from './tournament.schema';
import { SharedModule } from '@shared/index';
import { MatchModule } from '@models/match/match.module';
import { UserModule } from '@models/user/user.module';

@Module({
  imports: [
    SharedModule,
    MongooseModule.forFeature([
      { name: 'Tournament', schema: TournamentSchema },
    ]),
    MatchModule,
    forwardRef(() => UserModule)
  ],
  providers: [TournamentResolver, TournamentService],
  exports: [TournamentService],
})
export class TournamentModule {}
