import * as mongoose from 'mongoose';

export const ContestantSchema = new mongoose.Schema({
  name: String,
  seed: Number,
  points: Number,
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});