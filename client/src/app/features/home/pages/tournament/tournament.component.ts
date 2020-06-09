import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subject } from 'rxjs';
import { switchMap, takeUntil, first } from 'rxjs/operators';

import { AppStore, TournamentDataService } from '@app/core';
import { ITournament, IContestant } from '../../../../../../../shared/models';
import { QuickJoinDialogComponent } from '../../components/quick-join-dialog/quick-join-dialog.component';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
})
export class TournamentComponent implements OnInit, OnDestroy {
  tournament: BehaviorSubject<Partial<ITournament>>;
  ngUnsubscribe: Subject<any> = new Subject<any>();

  contestantList: Partial<IContestant>[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appStore: AppStore,
    private tournamentDataService: TournamentDataService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.tournament = this.appStore.currentTournament;
    this.route.paramMap
      .pipe(
        takeUntil(this.ngUnsubscribe),
        switchMap((params: ParamMap) =>
          this.tournamentDataService.getTournament(null, params.get('linkCode'))
        )
      )
      .subscribe((result) => {
        if (!this.appStore.currentTournament.value) {
          this.router.navigateByUrl('/');
        }
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  joinClicked() {
    const dialogRef = this.dialog.open(QuickJoinDialogComponent, {
      data: {
        tournamentName: this.tournament.value.name,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(first())
      .subscribe((contestant) => {
        this.tournamentDataService.joinTournament(
          this.tournament.value.id,
          contestant.name,
          contestant.id
        ).pipe(first()).subscribe(result => {
          console.log('LOOK joinTournament result: ', result);
        });
      });
  }
}
