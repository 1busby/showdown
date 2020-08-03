export interface ISet {
  _id?: string;
  highSeedScore?: number;
  lowSeedScore?: number;
  outcome?: 'high' | 'low' | 'tie';
  startedOn?: Date;
  completedOn?: Date;
  notes?: string;
}
