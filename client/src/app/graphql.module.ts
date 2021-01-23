import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

import { environment } from '../environments/environment';
import { typeDefs } from '@app/core';
import { ISet } from './shared';

const uri = environment.production
  ? '/graphql'
  : 'http://localhost:3000/graphql';
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            sets: {
              merge(existing: ISet[] = [], incoming: ISet[]) {
                return existing.map(a => {
                  let incomingSet = incoming.find(b => a._id == b._id);
                  return !incomingSet ? a : {
                    ...a,
                    ...incomingSet
                  }
                });
              }
            }
          }
        }
      }
    }),
    // typeDefs,
    connectToDevTools: true,
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
