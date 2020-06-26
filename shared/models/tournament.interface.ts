import { IMatch, IUser, IContestant, IUpdate } from './';

export interface ITournament {
  _id: string;
  name: string;
  contestantCount: number;
  matches?: Partial<IMatch>[];
  contestants?: Partial<IUser>[];
  createdBy?: Partial<IUser> | string;
  createdOn?: Date;
  updatedOn?: Date;
  linkCode?: string;
  updates?: [IUpdate];
  editAccessCode?: string; 
}
