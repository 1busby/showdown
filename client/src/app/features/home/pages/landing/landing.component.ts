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
      .fetch()
      .pipe(first())
      .subscribe((result) => {
        this.allTournaments = result.data.tournaments;
      });
    this.usersGql
      .fetch()
      .pipe(first())
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
    this.removeTournamentGql.mutate({ _id }).pipe(first()).subscribe();
  }

  trackByFn(index, tournament) {
    return tournament._id;
  }
}
