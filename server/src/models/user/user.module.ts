import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { UserSchema } from './user.schema';
import { SharedModule } from '@shared/index';
import { TournamentModule } from '@models/tournament/tournament.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    SharedModule,
    forwardRef(() => TournamentModule),
  ],
  providers: [UserResolver, UserService],
  exports: [UserService]
})
export class UserModule {}
