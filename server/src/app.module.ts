import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './models/recipes/recipes.module';
import { UsersModule } from './models/users/users.module';
import appConfig from '../config/app-config.json';
import { TournamentsModule } from './models/tournaments/tournaments.module';
import { FrontendMiddleware } from './middleware/frontend.middleware';

@Module({
  imports: [
    MongooseModule.forRoot(appConfig.DATABASE_URL),
    RecipesModule,
    UsersModule,
    TournamentsModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ req }),
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
