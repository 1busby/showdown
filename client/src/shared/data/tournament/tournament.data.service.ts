import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { TournamentGqlFunctions } from './tournament.gql';
import { tap } from 'rxjs/operators';
import { AppStore } from 'src/shared/app.store';

@Injectable()
export class TournamentDataService {
  constructor(private apollo: Apollo, private appStore: AppStore) {}

  createTournament({ name, contestantCount }) {
    return this.apollo
      .mutate({
        mutation: TournamentGqlFunctions.mutations.createTournament,
        variables: {
          name,
          contestantCount
        }
      })
      .pipe(
        tap(result => {
          this.appStore.currentTournament.next(result.data['addTournament']);
        })
      );
  }

  getTournamentFromLinkCode(linkCode: string) {
    return this.apollo
      .query({
        query: TournamentGqlFunctions.queries.tournamentFromLinkCode,
        variables: {
          linkCode
        }
      })
      .pipe(
        tap(result => {
          this.appStore.currentTournament.next(result.data['tournamentFromLinkCode']);
        })
      );
  }
}
