import { IUser, IContestant } from '../';

export interface ITeam extends IContestant {
  seed?: number;
  users?: IUser[];
  createdOn?: Date;
  updatedOn?: Date;
}
