import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import {
  AuthService,
  TournamentsGQL,
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
}
