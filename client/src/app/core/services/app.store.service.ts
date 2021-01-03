import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IUser, ITournament, IMatch } from '@app/shared';
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

  losersMatchContainers: BehaviorSubject<
    MatchContainer[]
  > = new BehaviorSubject<MatchContainer[]>(null);

  setMatchContainers(
    matchContainers: MatchContainer[],
    losersMatchContainers?: MatchContainer[]
  ) {
    this.matchContainers.next(matchContainers);

    if (losersMatchContainers) {
      this.losersMatchContainers.next(losersMatchContainers);
    }
  }

  getMatchContainers() {
    return this.matchContainers;
  }

  getLosersMatchContainers() {
    return this.losersMatchContainers;
  }

  updateMatchContainer(match: IMatch) {
    let matchContainer = this.matchContainers.value.find(
      (container) => match._id === container._id
    );

    if (!matchContainer) {
      matchContainer = this.losersMatchContainers.value.find(
        (container) => match._id === container._id
      );
      if (!matchContainer) {
        console.error('Could not find a match to update!');
        return;
      }

      matchContainer.setData(match);
      this.losersMatchContainers.next(this.losersMatchContainers.value);
    }

    matchContainer.setData(match);
    this.matchContainers.next(this.matchContainers.value);
  }
}
