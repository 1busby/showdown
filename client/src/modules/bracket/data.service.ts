import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IEvent } from './../../../../shared/models/event.interface';
import { ITournament } from './../../../../shared/models/tournament.interface';
import { Match } from './../../shared/models/match';

@Injectable()
export class DataService {
  tournament: BehaviorSubject<ITournament>;
  event: BehaviorSubject<IEvent>;

  matches: BehaviorSubject<Match>[];
}
