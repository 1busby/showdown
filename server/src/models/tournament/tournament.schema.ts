import * as mongoose from 'mongoose';

import { MatchSchema } from '@models/match/match.schema';

const anonymousContestantSchema = new mongoose.Schema({
  name: String,
  seed: Number,
  points: Number,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

export const TournamentSchema = new mongoose.Schema({
  name: String,
  description: String,
  contestantCount: Number,
  contestants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
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
  structure: String,
  anonymousContestants: [anonymousContestantSchema],
});
