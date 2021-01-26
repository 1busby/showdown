import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppStore, AuthService, AlertService } from '@app/core';
import { IUser, LoginComponent } from '@app/shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject<any>();

  user: IUser = null;

  constructor(
    private _snackBar: MatSnackBar,
    private authenticationService: AuthService,
    public appStore: AppStore,
    private alertService: AlertService,
    public dialog: MatDialog
  ) {
    this.alertService.getAlert().pipe(takeUntil(this.ngUnsubscribe)).subscribe(alert => {
      if (!alert) {
        return;
      }
      this._snackBar.open(alert.text, null, {
        duration: 2000,
        panelClass: `${alert.type}-snackbar`
      });
    });
  }

  ngOnInit() {
    this.authenticationService.user.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  login() {
    this.dialog.open(LoginComponent, {
      width: '250px',
    });
  }

  logout() {
    this.authenticationService.logout();
  }
}
