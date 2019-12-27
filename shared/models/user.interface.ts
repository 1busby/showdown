import { ITeam } from './';

export interface IUser {
  id?: string;
  name?: string;
  email?: string;
  teams?: ITeam[];
  createdOn?: Date;
  updatedOn?: Date;

  // front end only
  token?: string;
  password: string;
}
