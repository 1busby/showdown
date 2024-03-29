import * as mongoose from 'mongoose';

import { MatchSchema } from '@models/match/match.schema';
import { UpdateSchema } from '@models/update/update.schema';

export const ShowdownSchema = new mongoose.Schema({
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
  wager: Number,
  hasStarted: Boolean,
  allowRegistration: Boolean,
  allowSelfScoring: Boolean,
  structure: String,
  updates: [UpdateSchema]
});
