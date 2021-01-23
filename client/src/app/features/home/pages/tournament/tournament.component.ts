import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subject, of } from 'rxjs';
import { switchMap, takeUntil, first, catchError } from 'rxjs/operators';

import {
  TournamentGQL,
  JoinTournamentGQL,
  AlertService,
  RequestEditAccessGQL,
  AppStore,
  MatchContainer,
  EditTournamentGQL,
} from '@app/core';
import { ITournament, IContestant } from '@app/shared';
import { QuickJoinDialogComponent } from '../../components/quick-join-dialog/quick-join-dialog.component';
import { EditAccessDialogComponent } from '../../components/edit-access-dialog/edit-access-dialog.component';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-home-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
})
export class TournamentComponent implements OnInit, OnDestroy {
  tournament: Partial<ITournament>;
  ngUnsubscribe: Subject<any> = new Subject<any>();

  contestantList: Partial<IContestant>[] = [];

  isCheckingEditAccess = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tournamentGql: TournamentGQL,
    private joinTournamentGql: JoinTournamentGQL,
    private requestEditAccessGql: RequestEditAccessGQL,
    private alertService: AlertService,
    public dialog: MatDialog,
    private appStore: AppStore,
    private matchService: MatchService,
    private editTournamentGql: EditTournamentGQL
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        takeUntil(this.ngUnsubscribe),
        switchMap(
          (params: ParamMap) =>
            this.tournamentGql.watch({ linkCode: params.get('linkCode') })
              .valueChanges
        ),
        catchError((error) => {
          this.router.navigateByUrl('/');
          return of('Error finding tournament because ' + error);
        })
      )
      .subscribe((result) => {
        if (typeof result === 'string') {
          console.error('Unexpected typeof ', result);
          return;
        }
        if (!result) {
          this.router.navigateByUrl('/');
          return;
        }

        this.tournament = result.data.tournament;
        // this.tournament.contestants = this.tournament.contestants
        //   .slice()
        //   .sort((a, b) => a.seed - b.seed);
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
            id: this.tournament._id,
            contestantName: contestant.name,
            userId: contestant._id,
          })
          .pipe(first())
          .subscribe((result) => {
            console.log('LOOK joinTournament result: ', result);
          });
      });
  }

  editTournament(runTournament?: boolean) {
    this.isCheckingEditAccess = true;
    const editAccessCode = localStorage.getItem(
      `editAccessCode-${this.tournament.linkCode}`
    );
    if (editAccessCode) {
      this.requestEditAccessGql
        .fetch({
          tournamentId: this.tournament._id,
          editAccessCode,
        })
        .subscribe((result) => {
          if (result.data['requestEditAccess'].canEdit) {
            this.isCheckingEditAccess = false;
            if (runTournament) {
              this.editTournamentGql
                .mutate({ _id: this.tournament._id, hasStarted: true })
                .pipe(first())
                .subscribe();
            } else {
              this.router.navigateByUrl(`/${this.tournament.linkCode}/edit`);
            }
          } else {
            this.showEditAccessDialog();
          }
        });
    } else {
      this.showEditAccessDialog();
    }
  }

  showEditAccessDialog() {
    const dialogRef = this.dialog.open(EditAccessDialogComponent, {
      data: {
        tournamentId: this.tournament._id,
        tournamentName: this.tournament.name,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(first())
      .subscribe((editAccessCode: string) => {
        if (!editAccessCode) {
          this.isCheckingEditAccess = false;
        }
        this.requestEditAccessGql
          .fetch({
            tournamentId: this.tournament._id,
            editAccessCode,
          })
          .subscribe((result) => {
            this.isCheckingEditAccess = false;
            if (result.data['requestEditAccess'].canEdit) {
              localStorage.setItem(
                `editAccessCode-${this.tournament.linkCode}`,
                editAccessCode
              );
              this.router.navigateByUrl(`/${this.tournament.linkCode}/edit`);
            } else {
              this.alertService.error('Something went wrong');
            }
          });
      });
  }

  showMatchDetails(match: MatchContainer) {
    const canEdit = localStorage.getItem(
      `editAccessCode-${this.tournament.linkCode}`
    )
      ? true
      : false;
    this.matchService
      .showMatchDetails(match, canEdit, this.tournament)
      .pipe(first())
      .subscribe(({ action, match }: { action: string, match: MatchContainer }) => {
        // if (match && action === 'save') {
        //   let matchesToBeSaved = [];

        //   const numSets = match.sets.length;
        //   let highSeedScore = 0;
        //   let lowSeedScore = 0;
        //   let isMatchComplete = true;
        //   for (let i = numSets - 1; i >= 0; i--) {
        //     const setOutcome = match.sets[i].outcome;
        //     if (!setOutcome) {
        //       // match not finished
        //       isMatchComplete = false;
        //       break;
        //     } else if (setOutcome === 'high') {
        //       highSeedScore++;
        //     } else if (setOutcome === 'low') {
        //       lowSeedScore++;
        //     }
        //   }

        //   if (isMatchComplete) {
        //     if (highSeedScore > lowSeedScore) {
        //       match.updateWinner(MatchContainer.HIGHSEED);
        //     } else if (lowSeedScore > highSeedScore) {
        //       match.updateWinner(MatchContainer.LOWSEED);
        //     }

        //     if(match.observers[0]) {
        //       matchesToBeSaved = [
        //         ...matchesToBeSaved,
        //         ...match.observers.map((matchContainer: MatchContainer) => matchContainer.getData())
        //       ];
        //     }
        //   }
        //   matchesToBeSaved.push(match.getData());

        //   // this.editTournamentGql
        //   //   .mutate({
        //   //     _id: this.tournament._id,
        //   //     matches: matchesToBeSaved,
        //   //   })
        //   //   .pipe(first())
        //   //   .subscribe(result => {
        //   //     debugger
        //   //   });
        // }
      });
  }
}
