import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { ITournament } from '../../../../../../shared/models';
import { AppStore } from 'src/shared/app.store';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent {
  tournament: BehaviorSubject<Partial<ITournament>>;

  constructor(private router: Router, private appStore: AppStore) {
    this.tournament = this.appStore.currentTournament;
    if (!appStore.currentTournament.value) {
      this.router.navigateByUrl('/');
    }
  }
}
