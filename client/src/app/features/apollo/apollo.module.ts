import {ApolloModule, Apollo} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import { NgModule } from '@angular/core';




import { environment } from '@env/environment';
import { typeDefs } from '@app/core';

const uri = environment.production
  ? '/graphql'
  : 'https://localhost:3000/graphql';

@NgModule({
  imports: [ApolloModule, HttpLinkModule],
})
export class BracketsApolloModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const link = httpLink.create({ uri });

    apollo.create({
      link,
      cache: new InMemoryCache(),
      typeDefs,
      connectToDevTools: true,
    });
  }
}
