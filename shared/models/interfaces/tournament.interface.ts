import { IEvent } from './event.interface';

export interface ITournament {
  id: string;
  events: IEvent[] | string[];
}