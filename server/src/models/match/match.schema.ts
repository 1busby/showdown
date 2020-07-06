import * as mongoose from 'mongoose';

export const MatchSchema = new mongoose.Schema({
  roundNumber: Number,
  matchNumber: Number,
  winnerSeed: Number,
  createdOn: Date,
  updatedOn: Date,
  highSeedNumber: Number,
  lowSeedNumber: Number,
});
