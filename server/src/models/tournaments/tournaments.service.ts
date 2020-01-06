import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewTournamentInput } from './dto/new-tournament.input';
import { TournamentsArgs } from './dto/tournaments.args';
import { Tournament } from './tournament';
import * as shortid from 'shortid';

@Injectable()
export class TournamentsService {
  constructor(@InjectModel('Tournament') private readonly tournamentModel: Model<Tournament>) {}

  async create(data: NewTournamentInput): Promise<Tournament> {
    const createdTournament = new this.tournamentModel({
      ...data,
      linkCode: shortid.generate(),
      createdOn: Date.now(),
      updatedOn: Date.now(),
    });
    return await createdTournament.save();
  }

  async findOneById(id: string): Promise<Tournament> {
    return {} as any;
  }

  async findOneByToken(token: string): Promise<Tournament> {
    return {} as any;
  }

  async findAll(tournamentssArgs: TournamentsArgs): Promise<Tournament[]> {
    return await this.tournamentModel.find().exec();
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
