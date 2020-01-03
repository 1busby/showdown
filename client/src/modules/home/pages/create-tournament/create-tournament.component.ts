import { Component } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { ITournament } from '../../../../../../shared/models';
import { AppStore } from 'src/shared/app.store';

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

  constructor(private formBuilder: FormBuilder, private appStore: AppStore) {
    this.tournament = this.appStore.currentTournament;

    this.tournament.next({
      name: 'Mega Battle XTreme',
      contestantCount: 8,
      contestants: []
    });

    this.loadTournament();
  }

  loadTournament() {
    this.tournamentForm.patchValue(this.tournament.value);
  }

  onSubmit() {
    debugger
  }

  createTournament() {
    
  }

  addContestant(contestant) {
    this.contestants.push(this.formBuilder.control(contestant));
  }
}
