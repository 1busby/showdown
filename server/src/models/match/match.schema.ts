import * as mongoose from 'mongoose';

import { setSchema } from '../set/set.schema';

export const MatchSchema = new mongoose.Schema({
  roundNumber: Number,
  matchNumber: Number,
  winnerSeed: String,
  createdOn: Date,
  updatedOn: Date,
  highSeedNumber: Number,
  lowSeedNumber: Number,
  highSeedContestant: mongoose.Schema.Types.ObjectId,
  lowSeedContestant: mongoose.Schema.Types.ObjectId,
  sets: [setSchema],
});
