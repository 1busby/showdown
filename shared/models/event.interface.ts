import { IMatch, IUser, ITeam } from './';

export interface IEvent {
  id: string;
  matches: IMatch[];
  contestants: ITeam[];
  createdOn: Date;
  updatedOn: Date;
  createdBy?: Partial<IUser> | string;
}
