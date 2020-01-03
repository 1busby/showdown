import { Component } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { ITournament } from '../../../../../../shared/models';
import { AppStore } from 'src/shared/app.store';
import { Router } from '@angular/router';
import { debug } from 'util';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss']
})
export class CreateTournamentComponent {
  tournament: BehaviorSubject<Partial<ITournament>>;

  tournamentForm = this.formBuilder.group({
    name: [''],
    contestantCount: [0],
    contestants: this.formBuilder.array([])
  });

  get contestants() {
    return this.tournamentForm.get('contestants') as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private appStore: AppStore
  ) {
    this.tournament = this.appStore.currentTournament;

    if (this.tournament.value) {
      this.loadTournament();
    } else {
      this.tournamentForm.patchValue({
        name: 'Mega Battle XTreme',
        contestantCount: 8,
        contestants: []
      });
    }
  }

  loadTournament() {
    this.tournamentForm.patchValue(this.tournament.value);
  }

  onSubmit() {
    // TODO extra validation, maybe show a confirmation dialog
    this.createTournament();
  }

  createTournament() {
    this.tournament.next(this.tournamentForm.value);
    this.router.navigateByUrl('/tournament');
  }

  addContestant(contestant) {
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