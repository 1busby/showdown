import { IUser } from './user.interface';

export interface ITeam {
  id?: string;
  name?: string;
  players: IUser[] | string[];
}
