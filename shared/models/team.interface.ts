import { IUser } from './user.interface';

export interface ITeam {
  id?: string;
  name?: string;
  users?: IUser[] | string[];
  createdOn: Date;
  updatedOn: Date;
}
