import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';

import { AppStore, AuthService, AlertService} from '@app/core';
import { IUser, LoginComponent } from '@app/shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly VAPID_PUBLIC_KEY =
    'BPsLfHWEVrAUNEVuXwzFsUWSmIG4Sq6EMuySGbkiDkI7WK1lg71wQL1OLVEFCScVmJpy1W2OajKRPwFY-ysirzY';
  private ngUnsubscribe = new Subject<any>();

  user: IUser = null;
  isLoadingProfile = false;

  constructor(
    private _snackBar: MatSnackBar,
    private authService: AuthService,
    public appStore: AppStore,
    private alertService: AlertService,
    public dialog: MatDialog,
    private router: Router,
  ) {
    this.alertService
      .getAlert()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((alert) => {
        if (!alert) {
          return;
        }
        this._snackBar.open(alert.text, null, {
          duration: 2000,
          panelClass: `${alert.type}-snackbar`,
        });
      });

    this.authService.isLoadingProfile.pipe(takeUntil(this.ngUnsubscribe)).subscribe((isLoading) => {
      this.isLoadingProfile = isLoading;
    });
  }

  ngOnInit() {
    this.authService.user.pipe(takeUntil(this.ngUnsubscribe)).subscribe((user) => {
      console.log('LOOK homeComponent user ', user);
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  login() {
    // MetaMask requires requesting permission to connect users accounts
    this.authService.loginEthereum();  
    // this.dialog.open(LoginComponent, {
    //   width: '250px',
    // });
  }

  logout() {
    this.authService.logout();
  }

  newTournament() {
    this.router.navigateByUrl('/create');
  }

  openProfile() {
    this.router.navigateByUrl(`/profile/${this.user.username}`);
  }
}
