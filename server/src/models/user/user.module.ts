import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersResolver } from './user.resolver';
import { UsersService } from './user.service';
import { UserSchema } from './user.schema';
import { SharedModule } from '@shared/index';
import { TournamentsModule } from '@models/tournament/tournament.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    SharedModule,
    TournamentsModule,
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
