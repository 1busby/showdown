import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first, takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { ITournament, IContestant, IMatch, IUser } from '@app/shared';
import {
  CreateTournamentGQL,
  TournamentGQL,
  EditTournamentGQL,
  AppStore,
  BracketHandler,
  AuthService,
  TournamentsGQL,
  RemoveTournamentGQL,
} from '@app/core';
import { Subject } from 'rxjs';
import { EditUserGQL } from '@app/core/data/user/edit-user.gql.service';
import { ConfirmationDialogComponent } from '@app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-home-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss'],
})
export class CreateTournamentComponent implements OnInit, OnDestroy {
  private _tournament: ITournament = {} as ITournament;
  private ngUnsubscribe = new Subject<any>();
  user: IUser;

  stepperIsInTransition = true;
  editMode = false;
  structureOptions = [
    {
      viewLabel: 'Single Elimination',
      value: 'single-elim',
    },
    {
      viewLabel: 'Double Elimination',
      value: 'double-elim',
    },
    // {
    //   viewLabel: 'Round Robin',
    //   value: 'round-robin',
    // },
  ];

  tournamentForm: FormGroup = this.formBuilder.group({
    name: [''],
    description: [''],
    contestantCount: [0],
    contestants: this.formBuilder.array([]),
    editAccessCode: '',
    matches: this.formBuilder.array([]),
    setCount: [0],
    allowRegistration: [false],
    requireRegistrationApproval: [true],
    allowSelfScoring: [false],
    isTeamBased: [false],
    teamSize: [1],
    structure: ['single-elim'],
  });

  ctx1 = {
    tournamentForm: this.tournamentForm,
  };

  get contestants(): FormArray {
    return this.tournamentForm.get('contestants') as FormArray;
  }

  minStartDate: Date;
  maxStartDate: Date;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private createTournamentGql: CreateTournamentGQL,
    private editTournamentGql: EditTournamentGQL,
    private tournamentGql: TournamentGQL,
    private tournamentsGql: TournamentsGQL,
    private updateUserGql: EditUserGQL,
    private bracketHandlerService: BracketHandler,
    private appStore: AppStore,
    private authService: AuthService,
    private removeTournamentGql: RemoveTournamentGQL
  ) {
    const currentDate = new Date();
    this.minStartDate = currentDate;
    this.maxStartDate = new Date(currentDate.getFullYear(), 10, 31);
  }

  ngOnInit() {
    const linkCode = this.route.snapshot.paramMap.get('linkCode');
    // if link code is given, set edit and fetch tournament
    if (linkCode) {
      this.editMode = true;
      this.tournamentGql
        .fetch({ linkCode }, { fetchPolicy: 'cache-first' })
        .subscribe(({ data: { tournament }, errors }) => {
          this._tournament = tournament;
          this.tournamentForm.patchValue({ ...tournament });
          const contestants = tournament.contestants
            .slice()
            .sort((a, b) => a.seed - b.seed);
          contestants.forEach(({ __typename, ...contestant }: any) =>
            this.addContestant(contestant)
          );
        });
    } else {
      this.tournamentForm.patchValue({
        name: '',
        description: '',
        contestantCount: 2,
        contestants: [],
        editAccessCode: '123',
        matches: [],
        setCount: 1,
        allowRegistration: false,
        allowSelfScoring: false,
        structure: 'single-elim',
      });
    }

    this.authService.user
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((user) => {
        this.user = user;
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  loadTournament(tournament: ITournament) {
    this.tournamentForm.patchValue(tournament);
  }

  onSubmit() {
    // TODO: extra validation, maybe show a confirmation dialog
    this.createTournament();
  }

  createTournament() {
    const matchContainers = this.bracketHandlerService.createBracket({
      ...this.tournamentForm.value,
      matches: this._tournament.matches,
    });
    this.appStore.setMatchContainers(
      matchContainers.matches,
      matchContainers.losersMatches
    );
    const matches: Partial<IMatch>[] = [];
    [
      ...this.appStore.getWinnersMatchContainers().value,
      ...this.appStore.getLosersMatchContainers().value,
    ].forEach((matchContainer) => {
      if (matchContainer.sets.length < this.tournamentForm.value.setCount) {
        // add new sets
        for (
          let i = matchContainer.sets.length;
          i < this.tournamentForm.value.setCount;
          i++
        ) {
          matchContainer.sets.push({
            orderNumber: i + 1,
          });
        }
      } else if (
        matchContainer.sets.length > this.tournamentForm.value.setCount
      ) {
        // remove extra sets
        const setRemoveCount =
          matchContainer.sets.length - this.tournamentForm.value.setCount;
        for (let i = 0; i < setRemoveCount; i++) {
          matchContainer.sets.pop();
        }
      }
      matches.push(matchContainer.getData());
    });

    if (this.editMode) {
      const mutationInput = {
        _id: this._tournament._id,
        ...this.tournamentForm.value,
        contestants: this.tournamentForm.value.contestants.map(
          ({ profile, ...contestantData }) => {
            return contestantData;
          }
        ),
        matches,
      };
      this.editTournamentGql
        .mutate(mutationInput)
        .pipe(first())
        .subscribe((result) => {
          localStorage.setItem(
            `editAccessCode-${result.data.updateTournament.linkCode}`,
            this.tournamentForm.value.editAccessCode
          );
          this.router.navigateByUrl(
            `/${result.data.updateTournament.linkCode}`
          );
        });
    } else {
      const mutationInput = { ...this.tournamentForm.value, matches };
      if (this.user && this.user._id) {
        mutationInput.createdBy = this.user._id;
      }
      this.createTournamentGql
        .mutate(mutationInput, {
          optimisticResponse: {
            addTournament: {
              _id: 'newTourny1',
              name: mutationInput.name,
              description: mutationInput.description,
            },
          },
          update: (proxy, { data: { addTournament } }: any) => {
            let result: any = proxy.readQuery({
              query: this.tournamentsGql.document,
            });

            if (!result) {
              result = {
                tournaments: [],
              };
            }
            proxy.writeQuery({
              query: this.tournamentsGql.document,
              data: { tournaments: [...result.tournaments, addTournament] },
            });
          },
        })
        .pipe(first())
        .subscribe((result) => {
          if (this.user && this.user._id) {
            this.updateUserGql
              .mutate({
                _id: this.user._id,
                tournaments: [result.data.addTournament._id],
              })
              .pipe(first())
              .subscribe((res) => {});
          }
          localStorage.setItem(
            `editAccessCode-${result.data.addTournament.linkCode}`,
            this.tournamentForm.value.editAccessCode
          );
          this.router.navigateByUrl(`/${result.data.addTournament.linkCode}`);
        });
    }
  }

  contestantCountChange(event) {
    const contestantSizeDifference =
      this.contestants.length - event.target.value;
    if (contestantSizeDifference > 0) {
      for (let i = 0; i < contestantSizeDifference; i++) {
        this.contestants.removeAt(this.contestants.length - 1 - i);
      }
    }
  }

  addContestant(contestant: Partial<IContestant>) {
    this.contestants.push(
      this.formBuilder.control({
        ...contestant,
        seed: contestant.seed || this.contestants.length + 1,
      })
    );
  }

  removeContestant(data: { index: number; contestant: Partial<IContestant> }) {
    this.contestants.removeAt(data.index);
  }

  rearrangeContestants(contestants) {
    this.contestants.patchValue(contestants);
  }

  deleteTournament() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: `Delete ${this._tournament.name}?`,
        message: 'Are you sure you want to delete this tournament?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.removeTournamentGql
          .mutate(
            { _id: this._tournament._id },
            {
              // Optimistically update tournament list shown on screen
              update: (proxy, { data: { removeTournament } }: any) => {
                if (removeTournament === false) {
                  return;
                }
                // Read the data from our cache for this query.
                let { tournaments }: any = proxy.readQuery({
                  query: this.tournamentsGql.document,
                });
                // Add our comment from the mutation to the end.\
                tournaments = tournaments.filter(
                  (m) => m._id !== this._tournament._id
                );
                // Write our data back to the cache.
                proxy.writeQuery({
                  query: this.tournamentsGql.document,
                  data: { tournaments },
                });
              },
            }
          )
          .pipe(first())
          .subscribe((res) => {
            this.router.navigateByUrl(`/`);
          });
      }
    });
  }
}
