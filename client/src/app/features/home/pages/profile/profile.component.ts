import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { first, switchMap, takeUntil } from 'rxjs/operators';

import {
  AuthService,
  UserProfileGQL,
  CreateShowdownGQL,
  IconTransactionService,
} from '@app/core';
import { IUser } from '@app/shared';

@Component({
  selector: 'sd-home-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnDestroy {
  private ngUnsubscribe = new Subject<any>();

  user: IUser;
  loggedInUser: IUser;
  showShowdownForm = false;
  icxAmount = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userProfileGql: UserProfileGQL,
    private authService: AuthService,
    private iconService: IconTransactionService,
    private createShowdownGql: CreateShowdownGQL
  ) {
    this.route.params
      .pipe(
        takeUntil(this.ngUnsubscribe),
        switchMap(({ username }) => {
          return this.userProfileGql.watch({ username }).valueChanges;
        })
      )
      .subscribe((result) => {
        this.user = result.data.user;
        this.iconService
          .getIcxAmount(this.user.iconPublicAddress)
          .then((amount) => {
            this.icxAmount = amount;
          });
      });

    this.authService.user.subscribe((user) => {
      this.loggedInUser = user;
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  openTournament(linkCode) {
    this.router.navigateByUrl(`/${linkCode}`);
  }

  createShowdown(showdownData) {
    this.createShowdownGql
    .mutate({
      ...showdownData,
      challenger: this.loggedInUser._id,
      defender: this.user._id,
    })
    .pipe(first())
    .subscribe(result => {
      console.log('LOOK Showdown Created, result ', result);
    });
  }
}
