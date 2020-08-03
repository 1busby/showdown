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
  selector: 'app-home-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss'],
})
export class MatchDetailComponent implements OnInit {
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
    private bracketHandlerService: BracketHandler,
    private appStore: AppStore
  ) {}

  ngOnInit() {}
}
