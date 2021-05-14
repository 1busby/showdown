import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

import { environment } from '../environments/environment';

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
            // contestants: {
            //   merge(existing = [], incoming: any[]) {
            //     return myMerge(existing, incoming);
            //   },
            // },
          },
        },
        Set: {
          fields: {
            outcome: {
              merge(existing, incoming) {
                
                return incoming;
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
    const existingItemIndex = newItems.findIndex((b) => a.__ref == b.__ref);
    if (existingItemIndex < 0) {
      newItems.push(a);
    } else {
      newItems[existingItemIndex] = {
        ...newItems[existingItemIndex],
        ...a,
      };
    }
  });

  return newItems;
}
