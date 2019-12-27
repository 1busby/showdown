import { IContestant, ITeam, ITournament } from './';

export interface IMatch {
  id: string;
  tournament: ITournament;
  matchNumber: number;
  contestants?: IContestant[];
  highSeed: IContestant;
  lowSeed: IContestant;
  winner: IContestant;
  winnerSeed: string;
}
