import { IUser, IMatch } from '../';

export interface ISet {
  id: string;
  match: IMatch;
  highSeedScore: number;
  lowSeedScore: number;
  winner: IUser;
  startedOn: Date;
  completedOn: Date;
}
