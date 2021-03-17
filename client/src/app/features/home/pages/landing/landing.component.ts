import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { first, takeUntil } from 'rxjs/operators';

import {
  AuthService,
  TournamentsGQL,
  RemoveTournamentGQL,
  UsersGQL,
} from '@app/core';
import { ITournament, IUser } from '@app/shared';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnDestroy {
  ngUnsubscribe: Subject<any> = new Subject<any>();
  allTournaments: Partial<ITournament>[];
  allUsers: Partial<IUser>[];
  loggedInUser;

  constructor(
    private router: Router,
    private tournamentsGql: TournamentsGQL,
    private usersGql: UsersGQL,
    private removeTournamentGql: RemoveTournamentGQL,
    private authService: AuthService
  ) {
    this.tournamentsGql
      .watch()
      .valueChanges
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((result) => {
        this.allTournaments = result.data.tournaments;
      });
    this.usersGql
      .watch()
      .valueChanges
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((result) => {
        this.allUsers = result.data.users;
      });

    this.authService.user
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((user) => {
        this.loggedInUser = user;
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  createTournament() {
    this.router.navigateByUrl('/create');
  }

  viewTournament(tournament: ITournament) {
    if (!tournament.linkCode) {
      return;
    }
    this.router.navigateByUrl(`/${tournament.linkCode}`);
  }

  deleteTournament(_id) {
    this.removeTournamentGql
      .mutate(
        { _id },
        {
          // Optimistically update tournament list shown on screen
          update: (proxy, { data: { removeTournament } }: any) => {
            if (removeTournament === false) {
              return;
            }
            // Read the data from our cache for this query.
            let { tournaments }: any = proxy.readQuery({
              query: this.tournamentsGql.document,
            });
            // Add our comment from the mutation to the end.\
            tournaments = tournaments.filter(
              (m) => m._id !== _id
            );
            // Write our data back to the cache.
            proxy.writeQuery({ query: this.tournamentsGql.document, data: { tournaments } });
          },
        }
      )
      .pipe(first())
      .subscribe();
  }

  trackByFn(index, tournament) {
    return tournament._id;
  }
}
