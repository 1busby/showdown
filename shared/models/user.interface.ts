import { ITeam as Team } from '../';
import { IContestant } from './contestant.interface';

export interface IUser extends IContestant {
  email?: string;
  teams?: Team[];
  createdOn?: Date;
  updatedOn?: Date;

  // front end only
  token?: string;
  password?: string;
}
