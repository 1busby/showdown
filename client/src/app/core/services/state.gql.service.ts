import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class StateGQL extends Query<any> {
  document = gql`
    {
      isDark @client
    }
  `;

  setIsDark(isDark: boolean) {
    this.apollo.getClient().writeData({ data: { isDark } });
  }
}

export const typeDefs = `
  extend type Query {
    isDark: Boolean
  }
`;
