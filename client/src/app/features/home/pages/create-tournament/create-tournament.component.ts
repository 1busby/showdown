import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { ITournament, IContestant } from '@app/shared';
import {
  CreateTournamentGQL,
  TournamentGQL,
  EditTournamentGQL,
} from '@app/core';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss'],
})
export class CreateTournamentComponent implements OnInit {
  private _tournament: ITournament;
  tournamentForm = this.formBuilder.group({
    name: [''],
    contestantCount: [0],
    contestants: this.formBuilder.array([]),
  });

  get contestants() {
    return this.tournamentForm.get('contestants') as FormArray;
  }

  editMode = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private createTournamentGql: CreateTournamentGQL,
    private editTournamentGql: EditTournamentGQL,
    private tournamentGql: TournamentGQL
  ) {}

  ngOnInit() {
    const linkCode = this.route.snapshot.paramMap.get('linkCode');
    if (linkCode) {
      this.editMode = true;
      this.tournamentGql
        .fetch({ linkCode }, { fetchPolicy: 'cache-first' })
        .subscribe(({ data: { tournament } }) => {
          this._tournament = tournament;
          this.tournamentForm.patchValue(tournament);
          tournament.contestants.forEach(({ __typename, ...contestant }: any) =>
            this.addContestant(contestant)
          );
        });
    } else {
      this.tournamentForm.patchValue({
        name: '',
        contestantCount: 0,
        contestants: [],
      });
    }
  }

  loadTournament(tournament: ITournament) {
    this.tournamentForm.patchValue(tournament);
  }

  onSubmit() {
    // TODO extra validation, maybe show a confirmation dialog
    this.createTournament();
  }

  createTournament() {
    if (this.editMode) {
      this.editTournamentGql
        .mutate({
          _id: this._tournament._id,
          name: this.tournamentForm.value.name,
          contestantCount: this.tournamentForm.value.contestantCount,
          contestants: this.tournamentForm.value.contestants,
        })
        .pipe(first())
        .subscribe((result) => {
          this.router.navigateByUrl(`/${result.data.updateTournament.linkCode}`);
        });
    } else {
      this.createTournamentGql
        .mutate({

          name: this.tournamentForm.value.name,
          contestantCount: this.tournamentForm.value.contestantCount,
          contestants: this.tournamentForm.value.contestants,
        })
        .pipe(first())
        .subscribe((result) => {
          this.router.navigateByUrl(`/${result.data.addTournament.linkCode}`);
        });
    }
  }

  addContestant(contestant: Partial<IContestant>) {
    this.contestants.push(this.formBuilder.control(contestant));
  }

  countChange(event) {
    const contestantSizeDifference =
      this.contestants.length - event.target.value;
    if (contestantSizeDifference > 0) {
      for (let i = 0; i < contestantSizeDifference; i++) {
        this.contestants.removeAt(this.contestants.length - 1 - i);
      }
    }
  }
}
