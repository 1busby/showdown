import { Component } from '@angular/core';

import { ITournament } from '../../../../../../shared/models';
import { AppStore } from 'src/shared/app.store';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent {
  tournament: BehaviorSubject<Partial<ITournament>>;

  constructor(private appStore: AppStore) {
    this.tournament = this.appStore.currentTournament;
    this.setupNewTournament();
  }

  setupNewTournament() {
    this.appStore.currentTournament.next(
      {
        name: 'Mega Battle XTreme',
        contestantCount: 16,
        contestants: []
      }
    );
  }
}
