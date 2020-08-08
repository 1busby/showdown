export interface ISet {
  _id?: string;
  orderNumber?: number;
  highSeedScore?: number;
  lowSeedScore?: number;
  outcome?: 'high' | 'low' | 'tie';
  startedOn?: Date;
  completedOn?: Date;
  notes?: string;
  __typename?: string;
}
