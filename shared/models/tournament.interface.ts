import { IEvent } from './';

export interface ITournament {
  id: string;
  events?: IEvent[];
  createdOn: Date;
  updatedOn: Date;
}
