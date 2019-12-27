import { BehaviorSubject } from 'rxjs';

import { IUser } from '../../../shared/models';

export class AppStore {
  loggedInUser: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);
}
