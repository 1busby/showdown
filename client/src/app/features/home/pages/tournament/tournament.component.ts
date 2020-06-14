import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subject, of } from 'rxjs';
import { switchMap, takeUntil, first, catchError } from 'rxjs/operators';

import { TournamentGQL, JoinTournamentGQL } from '@app/core';
import { ITournament, IContestant } from '@app/shared';
import { QuickJoinDialogComponent } from '../../components/quick-join-dialog/quick-join-dialog.component';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
})
export class TournamentComponent implements OnInit, OnDestroy {
  tournament: Partial<ITournament>;
  ngUnsubscribe: Subject<any> = new Subject<any>();

  contestantList: Partial<IContestant>[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tournamentGql: TournamentGQL,
    private joinTournamentGql: JoinTournamentGQL,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    console.log('LOOK TournamentComponent.ngOnInit')
    this.route.paramMap
      .pipe(
        takeUntil(this.ngUnsubscribe),
        switchMap(
          (params: ParamMap) =>
          this.tournamentGql.watch({ linkCode: params.get('linkCode') })
          .valueChanges
        ),
        catchError(error => {
          this.router.navigateByUrl('/');
          return of('Error finding tournament because ' + error);
        })
      )
      .subscribe((result) => {
        if (typeof result === 'string') {
          console.error(result);
          return;
        }
        if (!result) {
          this.router.navigateByUrl('/');
          return;
        }

        this.tournament = result.data.tournament;
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  joinClicked() {
    const dialogRef = this.dialog.open(QuickJoinDialogComponent, {
      data: {
        tournamentName: this.tournament.name,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(first())
      .subscribe((contestant) => {
        this.joinTournamentGql
          .mutate({
            id: this.tournament.id,
            contestantName: contestant.name,
            userId: contestant.id,
          })
          .pipe(first())
          .subscribe((result) => {
            console.log('LOOK joinTournament result: ', result);
          });
      });
  }
}
