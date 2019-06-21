import { IUser } from './user.interface';
import { IMatch } from './match.interface';

export interface ISet {
  id: string;
  match: IMatch | string;
  highSeedScore: number;
  lowSeedScore: number;
  winner: IUser;
  startedOn: Date;
  completedOn: Date;
}
