import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { ITournament, IContestant } from '@app/shared';
import { CreateTournamentGQL, TournamentGQL } from '@app/core';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss'],
})
export class CreateTournamentComponent implements OnInit {

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
    private route: ActivatedRoute,
    private router: Router,
    private createTournamentGql: CreateTournamentGQL,
    private tournamentGql: TournamentGQL
  ) {}

  ngOnInit() {
    const linkCode = this.route.snapshot.paramMap.get('linkCode');
    console.log('linkCode: ' + linkCode);
    if (linkCode) {
      this.tournamentGql
        .fetch({ linkCode }, { fetchPolicy: 'cache-only' })
        .pipe(first())
        .subscribe((currentTournament) => {
          this.tournamentForm.patchValue(currentTournament);
        });
    } else {
      this.tournamentForm.patchValue({
        name: '',
        contestantCount: 0,
        contestants: [],
        temporaryContestants: [],
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
    this.createTournamentGql
      .mutate({
        name: this.tournamentForm.value.name,
        contestantCount: this.tournamentForm.value.contestantCount,
        temporaryContestants: this.tournamentForm.value.contestants
          .filter((c) => !c.id)
          .map((c) => c.name),
      })
      .pipe(first())
      .subscribe((result) => {
        this.router.navigateByUrl(`/${result.data.addTournament.linkCode}`);
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
