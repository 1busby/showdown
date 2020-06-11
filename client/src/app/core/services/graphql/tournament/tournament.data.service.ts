import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { tap, catchError } from 'rxjs/operators';

import { ITournament } from '@app/shared';
import { TournamentGqlFunctions } from './tournament.gql';
import { AppStore, CreateTournamentGQL } from '@app/core';

@Injectable({ providedIn: 'root' })
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

  createTournament(tournament: ITournament) {
    return this.apollo
      .mutate({
        mutation: TournamentGqlFunctions.mutations.createTournament,
        variables: {
          name: tournament.name,
          contestantCount: tournament.contestantCount,
          temporaryContestants: tournament.contestants.filter(c => !c.id).map(c => c.name)
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
      .watchQuery({
        query: TournamentGqlFunctions.queries.tournament,
        variables: {
          linkCode
        }
      })
      .valueChanges
      .pipe(
        tap((result: any) => {
          this.appStore.currentTournament.next(
            result.data.tournament
          );
        })
      );
  }

  joinTournament(id: string, contestantName?: string, userId?: string) {
    return this.apollo
      .mutate({
        mutation: TournamentGqlFunctions.mutations.joinTournament,
        variables: {
          id,
          contestantName,
          userId
        }
      });
  }
}
