import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { TournamentGqlFunctions } from './tournament.gql';
import { tap, catchError } from 'rxjs/operators';
import { AppStore } from 'src/shared/app.store';

@Injectable()
export class TournamentDataService {
  constructor(private apollo: Apollo, private appStore: AppStore) {}

  getAllTournaments() {
    return this.apollo
      .query({
        query: TournamentGqlFunctions.queries.tournaments
      })
      .pipe(
        tap((result: any) => {
          this.appStore.allTournaments.next(result.data.tournaments);
        }),
        catchError((error, caught) => {
          return caught;
        })
      )
      .toPromise();
  }

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
        tap((result: any) => {
          this.appStore.currentTournament.next(result.data.addTournament);
        })
      );
  }

  getTournamentFromId(linkCode: string) {
    return this.apollo
      .query({
        query: TournamentGqlFunctions.queries.tournamentFromLinkCode,
        variables: {
          linkCode
        }
      })
      .pipe(
        tap((result: any) => {
          this.appStore.currentTournament.next(
            result.data.tournamentFromLinkCode
          );
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
        tap((result: any) => {
          this.appStore.currentTournament.next(
            result.data.tournamentFromLinkCode
          );
        })
      );
  }

  addContestant(tournamentId: string, contestant) {}
}
