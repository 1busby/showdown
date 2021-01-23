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
                return myMerge(existing, incoming);
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
  const newItems = [];
  const existingIndexesToIgnore = [];
  incoming.forEach((a) => {
    const existingItemIndex = existing.findIndex((b) => a._id == b._id);
    if (!existing[existingItemIndex]) {
      newItems.push(a);
    } else {
      existingIndexesToIgnore.push(existingItemIndex);
      newItems.push({
        ...existing[existingItemIndex],
        ...a,
      });
    }
  });

  return [
    ...newItems,
    ...existing.filter((item, index) => {
      return !existingIndexesToIgnore.includes(index);
    }),
  ];
}
