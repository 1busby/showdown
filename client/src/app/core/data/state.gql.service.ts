import {Query, gql} from 'apollo-angular';
import { Injectable } from '@angular/core';



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
    // this.apollo.getClient().writeData({ data: { isDark } });
  }
}

export const typeDefs = `
  extend type Query {
    isDark: Boolean
  }
`;
