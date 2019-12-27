import { IMatch, IUser, IContestant } from './';

export interface ITournament {
  id: string;
  name: string;
  contestantCount: number;
  matches?: IMatch[];
  contestants?: IContestant[];
  createdBy: Partial<IUser> | string;
  createdOn: Date;
  updatedOn: Date;
}
