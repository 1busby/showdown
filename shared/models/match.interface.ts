import { IContestant, ITournament } from './';

export interface IMatch {
  _id?: string;
  tournament?: ITournament;
  matchNumber?: number;
  roundNumber?: number;
  contestants?: IContestant[];
  highSeed?: IContestant;
  lowSeed?: IContestant;
  winner?: IContestant;
  winnerSeed?: string;
}
