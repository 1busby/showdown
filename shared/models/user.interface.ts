import { ITeam } from './team.interface';

export interface IUser {
  id: string;
  alias: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  teams: ITeam[] | string[];
  createdOn: Date;
  updatedOn: Date;
}
