import { ITeam } from './';
import { IContestant } from './contestant.interface';

export interface IUser extends IContestant {
  email?: string;
  teams?: ITeam[];
  createdOn: Date;
  updatedOn: Date;

  // front end only
  token?: string;
  password?: string;
}
