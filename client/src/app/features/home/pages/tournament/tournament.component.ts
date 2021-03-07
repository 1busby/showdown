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
  MatchContainer,
  RunTournamentGQL,
  AuthService,
} from '@app/core';
import { ITournament, IContestant, IUser } from '@app/shared';
import { QuickJoinDialogComponent } from '../../components/quick-join-dialog/quick-join-dialog.component';
import { EditAccessDialogComponent } from '../../components/edit-access-dialog/edit-access-dialog.component';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-home-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
})
export class TournamentComponent implements OnInit, OnDestroy {
  ngUnsubscribe: Subject<any> = new Subject<any>();
  loggedInUser: IUser;
  tournament: Partial<ITournament>;
  contestantList: Partial<IContestant>[] = [];
  isCheckingEditAccess = false;
  viewBeingShown: 'bracket' | 'contestants' | 'matches' | 'updates' = 'bracket';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private tournamentGql: TournamentGQL,
    private joinTournamentGql: JoinTournamentGQL,
    private requestEditAccessGql: RequestEditAccessGQL,
    private alertService: AlertService,
    public dialog: MatDialog,
    private matchService: MatchService,
    private runTournamentGql: RunTournamentGQL
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        takeUntil(this.ngUnsubscribe),
        switchMap(
          (params: ParamMap) =>
            this.tournamentGql.watch(
              { linkCode: params.get('linkCode') },
              {
                returnPartialData: true,
              }
            ).valueChanges
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

        console.log(
          'LOOK TournamentComponent new tournamet data ',
          result.data.tournament
        );
        this.tournament = result.data.tournament;
        // this.tournament.contestants = this.tournament.contestants
        //   .slice()
        //   .sort((a, b) => a.seed - b.seed);
      });

    this.authService.user.subscribe((user) => {
      this.loggedInUser = user;
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  joinClicked() {
    if (this.tournament.createdBy && this.tournament.createdBy._id) {
      if (!this.loggedInUser) {
        this.alertService.error('Log in to join this tournament');
        return;
      }
      if (this.checkIfContestant()) {
        this.alertService.error('You already joined!');
        return;
      }

      this.joinTournamentGql
        .mutate({
          _id: this.tournament._id,
          userId: this.loggedInUser._id,
        })
        .pipe(first())
        .subscribe((result) => {
          console.log('LOOK joinTournament result: ', result);
        });
    } else {
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
              _id: this.tournament._id,
              contestantName: contestant.name,
            })
            .pipe(first())
            .subscribe((result) => {
              console.log('LOOK joinTournament result: ', result);
            });
        });
    }
  }

  checkIfContestant(): boolean {
    if (!this.loggedInUser) {
      return false;
    }
    const index = this.contestantList.findIndex((contestant) => {
      return contestant._id === this.loggedInUser._id;
    });

    return index > -1 ? true : false;
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
              this.runTournamentGql
                .mutate({ _id: this.tournament._id })
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

  canEdit() {
    if (this.tournament.createdBy) {
      if (this.tournament.createdBy._id === this.loggedInUser._id) {
        return true;
      }
    } else {
      return localStorage.getItem(`editAccessCode-${this.tournament.linkCode}`)
        ? true
        : false;
    }
  }

  showMatchDetails(match: MatchContainer) {
    let canEdit = false;

    canEdit = this.canEdit();

    this.matchService
      .showMatchDetails(match, canEdit, this.tournament)
      .pipe(first())
      .subscribe();
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
    // });
  }

  showView(view: 'bracket' | 'contestants' | 'matches' | 'updates') {
    this.viewBeingShown = view;
  }
}
