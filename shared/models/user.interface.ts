import { ITeam } from './';

export interface IUser {
  id: string;
  alias: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  teams: ITeam[];
  createdOn: Date;
  updatedOn: Date;
}
