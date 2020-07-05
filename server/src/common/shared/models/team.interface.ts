import { IUser, IContestant } from '../';

export interface ITeam extends IContestant {
  _id: string;
  seed?: number;
  users?: IUser[];
  createdOn?: Date;
  updatedOn?: Date;
}
