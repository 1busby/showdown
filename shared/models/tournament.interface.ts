import { IMatch, IUser, IContestant, IUpdate } from './';

export interface ITournament {
  id: string;
  name: string;
  contestantCount: number;
  matches?: Partial<IMatch>[];
  contestants?: Partial<IUser>[];
  temporaryContestants?: string[];
  createdBy: Partial<IUser> | string;
  createdOn: Date;
  updatedOn: Date;
  linkCode: string;
  updates?: [IUpdate];
}
