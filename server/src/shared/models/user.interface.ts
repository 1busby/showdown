import { ITeam as Team } from './';
import { IContestant } from './contestant.interface';
import { ITournament } from './tournament.interface';

export interface IUser extends IContestant {
  _id?: string;
  dId?: string;
  username?: string;
  email?: string;
  teams?: Team[];
  createdOn?: Date;
  updatedOn?: Date;
  tournaments?: ITournament[];
  iconPublicAddress?: string;
  pushSubscription?: string;

  // front end only
  token?: string;
  password?: string;
}
