import { IMatch, IUser, IContestant, IUpdate } from './';

export interface ITournament {
  _id: string;
  name?: string;
  contestantCount?: number;
  matches?: IMatch[];
  contestants?: Array<Partial<IUser>>;
  createdBy?: Partial<IUser>;
  createdOn?: Date;
  updatedOn?: Date;
  linkCode?: string;
  updates?: [IUpdate];
  editAccessCode?: string;
  setCount?: number;
}
