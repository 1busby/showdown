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
  EditRegistrationRequestGQL,
  AppStore,
} from '@app/core';
import { ITournament, IContestant, IUser } from '@app/shared';
import { QuickJoinDialogComponent } from '../../components/quick-join-dialog/quick-join-dialog.component';
import { EditAccessDialogComponent } from '../../components/edit-access-dialog/edit-access-dialog.component';
import { MatchService } from '../../services/match.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { PushSubscriptionsDialogComponent } from '../../components/push-subscriptions-dialog/push-subscriptions-dialog.component';

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
  viewBeingShown:
    | 'bracket'
    | 'contestants'
    | 'matches'
    | 'updates'
    | 'requests' = 'bracket';
  isContestant = false;
  tooltipDelay = 500;

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
    private runTournamentGql: RunTournamentGQL,
    public appStore: AppStore,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private editRegistrationRequestGql: EditRegistrationRequestGQL
  ) {
    matIconRegistry.addSvgIcon(
      'swords',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/swords.svg')
    );
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        takeUntil(this.ngUnsubscribe),
        switchMap((params: ParamMap) =>
          this.tournamentGql
            .watch(
              { linkCode: params.get('linkCode') }
              // {
              //   returnPartialData: true,
              // }
            )
            .valueChanges.pipe(takeUntil(this.ngUnsubscribe))
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
        // if (!result && result.data && result.data.tournament) {
        //   this.router.navigateByUrl('/');
        //   return;
        // }

        console.log(
          'LOOK TournamentComponent new tournamet data ',
          result.data.tournament
        );
        this.tournament = result.data.tournament;
        this.isContestant = this.checkIfContestant();
        // this.tournament.contestants.forEach(contestant => {
        //   if (contestant.profile) {
        //     contestant.name = contestant.profile.username;
        //   }
        // })
      });

    this.authService.user
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((user) => {
        this.loggedInUser = user;
        this.isContestant = this.checkIfContestant();
      });
  }

  ngOnDestroy(): void {
    console.log('LOOK onDestroy Tournament');
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();

    this.appStore.setMatchContainers(null, null);
  }

  joinClicked() {
    if (this.tournament.createdBy && this.tournament.createdBy._id) {
      if (!this.loggedInUser) {
        this.alertService.error('Log in to join this tournament');
        return;
      }
      if (this.checkIfContestant()) {
        this.alertService.error('You already joined this tournament');
        return;
      }
      if (!this.tournament.allowRegistration) {
        this.alertService.error('This tournament does not allow registration');
        return;
      }

      let seed = 0;
      for (let i = 1; i <= this.tournament.contestantCount; i++) {
        const alreadySeededContestant = this.tournament.contestants.find(
          (cont) => cont.seed === i
        );
        if (!alreadySeededContestant) {
          seed = i;
          break;
        }
      }

      this.joinTournamentGql
        .mutate({
          _id: this.tournament._id,
          userId: this.loggedInUser._id,
          seed,
        })
        .pipe(first())
        .subscribe((result) => {
          let message;
          if (this.tournament.requireRegistrationApproval) {
            message =
              'You have successfully requested to join this tournament!';
          } else {
            message = 'You have successfully joined this tournament!';
          }
          this.alertService.success(message);
          this.requestNotificationSubscription();

          // // TODO Optimize
          // const matchContainers = this.bracketHandlerService.createBracket(
          //   this.tournament
          // );
          // const matchToSave = [
          //   ...matchContainers.matches,
          //   ...matchContainers.losersMatches,
          // ].find((match) => {
          //   return (
          //     (match.highSeed && match.highSeed._id == this.loggedInUser._id) ||
          //     (match.lowSeed && match.lowSeed._id == this.loggedInUser._id)
          //   );
          // });
          // if (matchToSave) {
          //   this.editTournamentGql
          //     .mutate({
          //       _id: this.tournament._id,
          //       matches: [matchToSave],
          //     })
          //     .pipe(first())
          //     .subscribe((result) => {
          //     });
          // }
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
          if (contestant.name && contestant.name.length > 0) {
            this.joinTournamentGql
              .mutate({
                _id: this.tournament._id,
                contestantName: contestant.name,
              })
              .pipe(first())
              .subscribe((result) => {
                let message;
                if (this.tournament.requireRegistrationApproval) {
                  message =
                    'You have successfully requested to join this tournament!';
                } else {
                  message = 'You have successfully joined this tournament!';
                }

                this.alertService.success(message);
                this.requestNotificationSubscription();
              });
          } else if (contestant.id && contestant.id.length > 0) {
            this.joinTournamentGql
              .mutate({
                _id: this.tournament._id,
                userId: contestant.id,
              })
              .pipe(first())
              .subscribe((result) => {
                let message;
                if (this.tournament.requireRegistrationApproval) {
                  message =
                    'You have successfully requested to join this tournament!';
                } else {
                  message = 'You have successfully joined this tournament!';
                }

                this.alertService.success(message);
                this.requestNotificationSubscription();
              });
          }
        });
    }
  }

  checkIfContestant(): boolean {
    if (!this.loggedInUser || !this.tournament) {
      return false;
    }
    const index = this.tournament.contestants.findIndex((contestant) => {
      return contestant._id === this.loggedInUser._id;
    });

    return index > -1 ? true : false;
  }

  checkIfWaitingApproval(): boolean {
    if (!this.loggedInUser || !this.tournament) {
      return false;
    }
    const index = this.tournament.registrationRequests.findIndex((request) => {
      return (
        request.contestant.profile &&
        request.contestant.profile._id === this.loggedInUser._id
      );
    });

    return index > -1 ? true : false;
  }

  editTournament(runTournament?: boolean) {
    if (
      this.tournament.createdBy &&
      this.tournament.createdBy._id === this.loggedInUser?._id
    ) {
      if (runTournament) {
        this.runTournamentGql
          .mutate({ _id: this.tournament._id })
          .pipe(first())
          .subscribe();
      } else {
        this.router.navigateByUrl(`/${this.tournament.linkCode}/edit`);
      }
      return;
    }

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
      if (
        this.loggedInUser &&
        this.tournament.createdBy._id === this.loggedInUser._id
      ) {
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

  showView(
    view: 'bracket' | 'contestants' | 'matches' | 'updates' | 'requests'
  ) {
    this.viewBeingShown = view;
  }

  reviewRegistrationRequest(event) {
    this.editRegistrationRequestGql
      .mutate({
        requestId: event.request._id,
        tournamentId: this.tournament._id,
        isApproved: event.isApproved,
      })
      .pipe(first())
      .subscribe();
  }

  requestNotificationSubscription() {
    const dialogRef = this.dialog.open(PushSubscriptionsDialogComponent);

    dialogRef
      .afterClosed()
      .pipe(first())
      .subscribe((confirmation) => {
        debugger
        if (confirmation && this.loggedInUser && !this.loggedInUser.pushSubscription) {
            // TODO: dont immediately ask
            this.alertService.subscribeToNotifications(this.loggedInUser);
        }
      });
  }
}
