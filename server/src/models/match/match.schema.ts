import * as mongoose from 'mongoose';

export const MatchSchema = new mongoose.Schema({
  tournament: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tournament',
    },
  ],
  roundNumber: Number,
  matchNumber: Number,
  highSeedContestant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  lowSeedContestant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  winnerSeed: Number,
  createdOn: Date,
  updatedOn: Date,
  highSeedNumber: Number,
  lowSeedNumber: Number,
});
