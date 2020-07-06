import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IUser, ITournament } from '@app/shared';
import { MatchContainer } from '../utils/match-container';

@Injectable({ providedIn: 'root' })
export class AppStore {
  loggedInUser: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);
  currentTournament: BehaviorSubject<
    Partial<ITournament>
  > = new BehaviorSubject<Partial<ITournament>>(null);
  allTournaments: BehaviorSubject<Partial<ITournament>[]> = new BehaviorSubject<
    Partial<ITournament>[]
  >(null);

  matchContainers: BehaviorSubject<MatchContainer[]> = new BehaviorSubject<
    MatchContainer[]
  >(null);

  setMatchContainers(matchContainers: MatchContainer[]) {
    this.matchContainers.next(matchContainers);
  }

  getMatchContainers() {
    return this.matchContainers;
  }
}
