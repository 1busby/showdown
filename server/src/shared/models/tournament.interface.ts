import { IMatch, IUser, IUpdate } from './';

export interface ITournament {
  _id: string;
  name?: string;
  description?: string;
  contestantCount?: number;
  matches?: IMatch[];
  contestants?: Array<Partial<IUser>>;
  createdBy?: Partial<IUser>;
  createdOn?: Date;
  updatedOn?: Date;
  linkCode?: string;
  updates?: IUpdate[];
  editAccessCode?: string;
  setCount?: number;
  hasStarted?: boolean;
  allowRegistration?: boolean;
  allowSelfScoring?: boolean;
  structure?: 'single-elim' | 'double-elim' | 'round-robin';
}
