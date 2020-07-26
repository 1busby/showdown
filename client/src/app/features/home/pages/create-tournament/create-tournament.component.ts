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
  private _tournament: ITournament;

  stepperIsInTransition = true;

  tournamentForm = this.formBuilder.group({
    name: [''],
    contestantCount: [0],
    contestants: this.formBuilder.array([]),
    editAccessCode: '',
    matches: this.formBuilder.array([]),
  });

  get contestants(): FormArray {
    return this.tournamentForm.get('contestants') as FormArray;
  }

  editMode = false;

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
        .subscribe(({ data: { tournament } }) => {
          this._tournament = tournament;
          const editAccessCode = localStorage.getItem('editAccessCode');
          this.tournamentForm.patchValue({ ...tournament, editAccessCode });
          tournament.contestants.forEach(({ __typename, ...contestant }: any) =>
            this.addContestant(contestant)
          );
        });
    } else {
      this.tournamentForm.patchValue({
        name: '',
        contestantCount: 0,
        contestants: [],
        editAccessCode: '123',
        matches: [],
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
    if (this.editMode) {
      this.editTournamentGql
        .mutate({
          _id: this._tournament._id,
          ...this.tournamentForm.value,
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
      this.bracketHandlerService.createBracket(this.tournamentForm.value);
      const matches: Partial<IMatch>[] = [];
      this.appStore.getMatchContainers().value.forEach((matchContainer) => {
        matches.push(matchContainer.getData());
      });
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
        seed: this.contestants.length + 1,
      })
    );
  }

  removeContestant(data: { index: number; contestant: Partial<IContestant> }) {
    this.removeContestantGql
    .mutate({
      _id: this._tournament._id,
      contestantId: data.contestant._id,
    })
    .pipe(first())
    .subscribe(result => {
      console.log('LOOK removeContestantGql result is ', result);
      this.contestants.removeAt(data.index);
    });
  }
}
