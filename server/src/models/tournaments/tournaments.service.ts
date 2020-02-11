import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewTournamentInput } from './dto/new-tournament.input';
import { TournamentsArgs } from './dto/tournaments.args';
import { Tournament } from './tournament';
import * as shortid from 'shortid';
import { UpdateTournamentInput } from './dto/update-tournament.input';

@Injectable()
export class TournamentsService {
  constructor(
    @InjectModel('Tournament')
    private readonly tournamentModel: Model<Tournament>,
  ) {}

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

  findOneByLinkCode(linkCode): Promise<Tournament> {
    return this.tournamentModel.findOne({ linkCode }).exec();
  }

  async findAll(tournamentssArgs: TournamentsArgs): Promise<Tournament[]> {
    return await this.tournamentModel.find().exec();
  }

  async updateOne(data: UpdateTournamentInput): Promise<boolean> {
    return this.tournamentModel.updateOne({ _id: data.id }, data)
      .then(result => {
        console.log('Update tournament result >>> ' + JSON.stringify(result));
        return true;
      })
      .catch(error => {
        throw new Error('Error updating tournament >>> ' + error);
      });
  }

  remove(id: string): Promise<boolean> {
    return this.tournamentModel
      .deleteOne({ _id: id })
      .then(result => {
        console.log('Remove tournament result >>> ' + JSON.stringify(result));
        return true;
      })
      .catch(error => {
        throw new Error('Error removing tournament >>> ' + error);
      });
  }
}
