import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { AuthService, UserGQL } from '@app/core';
import { IUser } from '@app/shared';
import { UserProfileGQL } from '@app/core/data/user/user-profile.gql.service';

@Component({
  selector: 'sd-home-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnDestroy {
  private ngUnsubscribe = new Subject<any>();

  user: IUser;
  loggedInUser: IUser;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userProfileGql: UserProfileGQL,
    private authService: AuthService
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
}
