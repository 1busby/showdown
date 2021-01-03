import { IContestant, ITournament } from './';
import { ISet } from './set.interface';

export interface IMatch {
  _id: string;
  tournament?: ITournament;
  matchNumber?: number;
  roundNumber?: number;
  highSeedNumber?: number;
  lowSeedNumber?: number;
  highSeedContestant?: IContestant;
  lowSeedContestant?: IContestant;
  winner?: IContestant;
  winnerSeed?: string; // HIGHSEED or LOWSEED
  matchRounds?: number;
  sets?: ISet[];
}
