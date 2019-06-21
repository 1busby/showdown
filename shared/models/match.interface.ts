import { ITeam } from './team.interface';
import { IEvent } from './event.interface';

export interface IMatch {
  id: string;
  event: IEvent | string;
  teams?: ITeam[] | string[];
  winnerSeed: string;
}
