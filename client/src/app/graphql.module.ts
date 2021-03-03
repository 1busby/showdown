import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

import { environment } from '../environments/environment';
import { typeDefs } from '@app/core';
import { IContestant, IMatch, ISet } from './shared';

const uri = environment.production
  ? '/graphql'
  : 'http://localhost:3000/graphql';
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache({
      typePolicies: {
        Tournament: {
          fields: {
            matches: {
              merge(existing: any[] = [], incoming: any[]) {
                return myMerge(existing, incoming);
              },
            },
            contestants: {
              merge(existing = [], incoming: any[]) {
                return myMerge(existing, incoming);
              },
            },
          },
        },
        Match: {
          fields: {
            sets: {
              merge(existing = [], incoming: any[]) {
                const newItems = [];
                
              },
            },
          },
        },
      },
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

function myMerge(existing: any[] = [], incoming: any[]) {
  const newItems = [
    ...existing
  ];
  incoming.forEach((a) => {
    const existingItemIndex = newItems.findIndex((b) => a._id == b._id);
    if (!newItems[existingItemIndex]) {
      newItems.push(a);
    } else {
      newItems.push({
        ...newItems[existingItemIndex],
        ...a,
      });
    }
  });

  return newItems;
}
