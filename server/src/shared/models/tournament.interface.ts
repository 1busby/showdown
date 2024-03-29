import { IMatch, IUser, IUpdate } from './';
import { IContestant } from './contestant.interface';
import { IRegistrationRequest } from './registration-request';

export interface ITournament {
  _id: string;
  name?: string;
  description?: string;
  contestantCount?: number;
  matches?: IMatch[];
  contestants?: Array<IContestant>;
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
  isComplete?: boolean;
  requireRegistrationApproval?: boolean;
  registrationRequests?: IRegistrationRequest[];
  structure?: 'single-elim' | 'double-elim' | 'round-robin';
}
