import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    RecipesModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
      // context: ({ req }) => ({ req }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
