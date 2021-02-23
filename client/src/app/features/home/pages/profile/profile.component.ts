import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { UserGQL } from '@app/core';
import { IUser } from '@app/shared';

@Component({
  selector: 'sd-home-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnDestroy {
  private ngUnsubscribe = new Subject<any>();

  user: IUser;

  constructor(private route: ActivatedRoute, private userGql: UserGQL) {
    this.route.params.pipe(
      takeUntil(this.ngUnsubscribe),
      switchMap(({ username }) => {
        return this.userGql.watch({ username }).valueChanges;
      })
    ).subscribe(result => {
      this.user = result.data.user;
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
