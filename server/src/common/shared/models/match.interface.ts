import { IContestant, ITournament } from '../';

export interface IMatch {
  _id: string;
  tournament?: ITournament;
  matchNumber?: number;
  roundNumber?: number;
  contestants?: IContestant[];
  highSeedNumber?: number;
  lowSeedNumber?: number;
  highSeedContestant?: IContestant;
  lowSeedContestant?: IContestant;
  winner?: IContestant;
  winnerSeed?: 'HIGHSEED' | 'LOWSEED';
}
