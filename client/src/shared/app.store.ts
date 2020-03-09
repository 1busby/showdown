import { BehaviorSubject } from 'rxjs';

import { IUser, ITournament } from '../../../shared/models';

export class AppStore {
  loggedInUser: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);
  currentTournament: BehaviorSubject<Partial<ITournament>> = new BehaviorSubject<Partial<ITournament>>(null);
  allTournaments: BehaviorSubject<Partial<ITournament>[]> = new BehaviorSubject<Partial<ITournament>[]>(null);
}
