import { IUser, ITeam, IEvent } from './';

export interface IMatch {
  id: string;
  event: IEvent | string;
  teams?: ITeam[];
  highSeed: ITeam;
  lowSeed: ITeam;
  winner: ITeam;
  winnerSeed: string;
}
