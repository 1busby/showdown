import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MatchContainer } from '../../shared/models/match-container';

@Injectable()
export class DataService {
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
