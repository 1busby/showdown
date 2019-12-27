import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/users.module';
import appConfig from '../config/app.secret.config.json';

@Module({
  imports: [
    MongooseModule.forRoot(appConfig.DATABASE_URL),
    RecipesModule,
    UsersModule,
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
export class AppModule {}
