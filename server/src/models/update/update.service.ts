import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { Update } from './update.model';

@Injectable()
export class UpdateService {
  constructor(
    @InjectModel('Update')
    private readonly matchModel: Model<Update>,
  ) {}

  // createMany(matches: MatchInput[], tournament: Tournament): Promise<Match[]> {
  //   const matchCreations = [];
  //   matches.forEach(match => {
  //     if (match.highSeedNumber) {
  //       match.highSeedContestant = Types.ObjectId(tournament.contestants.find(
  //         contesant => contesant.seed === match.highSeedNumber,
  //       )._id) as any;
  //     }
  //     if (match.lowSeedNumber) {
  //       match.lowSeedContestant = Types.ObjectId(tournament.contestants.find(
  //         contesant => contesant.seed === match.lowSeedNumber,
  //       )._id) as any;
  //     }
  //     const matchDocument = new this.matchModel({
  //       tournament: tournament._id,
  //       ...match,
  //     });
  //     const matchPromise = matchDocument.save();
  //     matchCreations.push(matchPromise);
  //   });

  //   return Promise.all(matchCreations);
  // }

  findAll(tournamentId) {
    return [];
  }
}
