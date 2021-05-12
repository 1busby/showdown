import * as mongoose from 'mongoose';

import { MatchSchema } from '@models/match/match.schema';
import { UpdateSchema } from '@models/update/update.schema';
import { ContestantSchema } from '@models/contestant/contestant.schema';

const RegistrationRequestSchema = new mongoose.Schema({
  contestant: ContestantSchema,
});

export const TournamentSchema = new mongoose.Schema({
  name: String,
  description: String,
  contestantCount: Number,
  contestants: [ContestantSchema],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  matches: [MatchSchema],
  createdOn: Date,
  updatedOn: Date,
  linkCode: String,
  editAccessCode: String,
  setCount: Number,
  hasStarted: Boolean,
  allowRegistration: Boolean,
  allowSelfScoring: Boolean,
  isComplete: Boolean,
  requireRegistrationApproval: Boolean,
  registrationRequests: [RegistrationRequestSchema],
  structure: String,
  updates: [UpdateSchema]
});
