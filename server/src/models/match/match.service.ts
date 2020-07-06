import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { Match } from './match.model';
import { MatchInput } from './dto/match.input';
import { Tournament } from '@models/tournament/tournament.model';

@Injectable()
export class MatchService {
  constructor(
    @InjectModel('Match')
    private readonly matchModel: Model<Match>,
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
