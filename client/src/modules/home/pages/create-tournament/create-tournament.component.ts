import { Component } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { ITournament, IContestant } from '../../../../../../shared/models';
import { AppStore } from 'src/shared/app.store';
import { Router } from '@angular/router';
import { TournamentDataService } from 'src/shared/data/tournament/tournament.data.service';

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
    contestants: this.formBuilder.array([]),
  });

  get contestants() {
    return this.tournamentForm.get('contestants') as FormArray;
  }

  get temporaryContestants() {
    return this.tournamentForm.get('temporaryContestants') as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private appStore: AppStore,
    private tournamentDataService: TournamentDataService
  ) {
    this.tournament = this.appStore.currentTournament;

    if (this.tournament.value) {
      this.loadTournament();
    } else {
      this.tournamentForm.patchValue({
        name: 'Mega Battle XTreme',
        contestantCount: 8,
        contestants: [],
        temporaryContestants: [],
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
    this.tournamentDataService
      .createTournament(this.tournamentForm.value)
      .toPromise()
      .then(result => {
        this.router.navigateByUrl(
          `/tournament/${result.data.addTournament.linkCode}/view`
        );
      });
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
