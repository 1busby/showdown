import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { ITournament, IContestant, IMatch } from '@app/shared';
import {
  CreateTournamentGQL,
  TournamentGQL,
  EditTournamentGQL,
  AppStore,
  BracketHandler,
  RemoveContestantGQL,
} from '@app/core';

@Component({
  selector: 'app-home-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss'],
})
export class CreateTournamentComponent implements OnInit {
  private _tournament: ITournament = {} as ITournament;

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
    {
      viewLabel: 'Round Robin',
      value: 'round-robin',
    },
  ];

  tournamentForm = this.formBuilder.group({
    name: [''],
    description: [''],
    contestantCount: [0],
    contestants: this.formBuilder.array([]),
    editAccessCode: '',
    matches: this.formBuilder.array([]),
    setCount: [0],
    allowRegistration: [false],
    allowSelfScoring: [false],
    structure: ['single-elim'],
  });

  get contestants(): FormArray {
    return this.tournamentForm.get('contestants') as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private createTournamentGql: CreateTournamentGQL,
    private editTournamentGql: EditTournamentGQL,
    private tournamentGql: TournamentGQL,
    private removeContestantGql: RemoveContestantGQL,
    private bracketHandlerService: BracketHandler,
    private appStore: AppStore
  ) {}

  ngOnInit() {
    const linkCode = this.route.snapshot.paramMap.get('linkCode');
    // if link code is given, set edit and fetch tournament
    if (linkCode) {
      this.editMode = true;
      this.tournamentGql
        .fetch({ linkCode }, { fetchPolicy: 'cache-first' })
        .subscribe(({ data: { tournament }, errors }) => {
          this._tournament = tournament;
          const editAccessCode = localStorage.getItem(
            `editAccessCode-${tournament.linkCode}`
          );
          this.tournamentForm.patchValue({ ...tournament, editAccessCode });
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
        contestantCount: 0,
        contestants: [],
        editAccessCode: '123',
        matches: [],
        setCount: 0,
        allowRegistration: false,
        allowSelfScoring: false,
        structure: 'single-elim',
      });
    }
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
      ...this.appStore.getLosersMatchContainers().value
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
      this.editTournamentGql
        .mutate({
          _id: this._tournament._id,
          ...this.tournamentForm.value,
          matches,
        })
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
      this.createTournamentGql
        .mutate({ ...this.tournamentForm.value, matches })
        .pipe(first())
        .subscribe((result) => {
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
}
