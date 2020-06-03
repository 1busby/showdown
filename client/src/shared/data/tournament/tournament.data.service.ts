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
          console.error('ERROR: getAllTournaments > ', error);
          return caught;
        })
      )
      .toPromise();
  }

  createTournament({ name, contestantCount, temporaryContestants }) {
    return this.apollo
      .mutate({
        mutation: TournamentGqlFunctions.mutations.createTournament,
        variables: {
          name,
          contestantCount,
          temporaryContestants
        }
      })
      .pipe(
        tap((result: any) => {
          this.appStore.currentTournament.next(result.data.addTournament);
        })
      );
  }

  getTournament(id?: string, linkCode?: string) {
    return this.apollo
      .query({
        query: TournamentGqlFunctions.queries.tournament,
        variables: {
          linkCode
        }
      })
      .pipe(
        tap((result: any) => {
          this.appStore.currentTournament.next(
            result.data.tournament
          );
        })
      );
  }

  addContestant(tournamentId: string, contestant) {}
}
