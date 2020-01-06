import { IMatch, IUser, IContestant } from './';

export interface ITournament {
  id: string;
  name: string;
  contestantCount: number;
  matches?: Partial<IMatch>[];
  contestants?: Partial<IContestant>[];
  createdBy: Partial<IUser> | string;
  createdOn: Date;
  updatedOn: Date;
  linkCode: string;
}
