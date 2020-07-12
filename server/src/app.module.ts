import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import configuration from './config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Models
import { HealthController } from 'health.controller';
import { TournamentsModule } from './models/tournament/tournament.module';
import { UsersModule } from './models/user/user.module';
import { MatchModule } from './models/match/match.module';

@Module({
  imports: [
    TerminusModule,
    HealthController,
    ConfigModule.forRoot({
      load: [configuration],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'public/brackets-client'),
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    UsersModule,
    TournamentsModule,
    MatchModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ req }),
      cors: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
