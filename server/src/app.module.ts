import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';

import configuration from '../config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './models/user/user.module';
import { TournamentsModule } from './models/tournament/tournament.module';
import { FrontendMiddleware } from './middleware/frontend.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    UsersModule,
    TournamentsModule,
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
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(FrontendMiddleware)
      .forRoutes(
        {
          path: '/**', // For all routes
          method: RequestMethod.ALL, // For all methods
        },
      );
  }
}
