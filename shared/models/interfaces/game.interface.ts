import { IMatch } from './match.interface';

export interface IGame {
  id: string;
  match: IMatch | string;
}
