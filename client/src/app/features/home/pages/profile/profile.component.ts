import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { AuthService, UserProfileGQL } from '@app/core';
import { IUser } from '@app/shared';
import { IconTransactionService } from '@app/core/services/icon-transaction.service';

@Component({
  selector: 'sd-home-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnDestroy {
  private ngUnsubscribe = new Subject<any>();

  user: IUser;
  loggedInUser: IUser;
  showChallengeForm = false;
  icxAmount = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userProfileGql: UserProfileGQL,
    private authService: AuthService,
    private iconService: IconTransactionService
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
        debugger
        this.iconService.getIcxAmount(this.user.iconPublicAddress).then(amount => {
          debugger
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
}
