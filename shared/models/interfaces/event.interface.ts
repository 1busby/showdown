import { IMatch, IUser } from '../index';

export interface IEvent {
  id: string;
  matches: IMatch[] | string[];
  createdOn: Date;
  updatedOn: Date;
  createdBy: Partial<IUser> | string;
}