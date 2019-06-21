import { IUser } from './';

export interface ITeam {
  id?: string;
  name?: string;
  seed: number;
  users?: IUser[];
  createdOn: Date;
  updatedOn: Date;
}
