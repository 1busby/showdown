import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as shortid from 'shortid';
import { ObjectId } from 'mongodb';

import { NewTournamentInput } from './dto/new-tournament.input';
import { TournamentsArgs } from './dto/tournament.args';
import { Tournament } from './tournament.model';
import { UpdateTournamentInput } from './dto/update-tournament.input';
import { RequestEditAccessInput } from './dto/request-edit-access.input';
import { EditAccessRequest } from './dto/edit-access-request';
import { CustomLogger } from '@shared/index';
import { merge } from 'rxjs';

@Injectable()
export class TournamentsService {
  constructor(
    @InjectModel('Tournament')
    private readonly tournamentModel: Model<Tournament>,
    private logger: CustomLogger,
  ) {}

  async create(data: NewTournamentInput): Promise<Tournament> {
    const anonymousContestants = [];
    const currentDate = Date.now();

    // tslint:disable-next-line: prefer-for-of
    for (let i = data.contestants.length - 1; i >= 0; i--) {
      if (!data.contestants[i].isRegistered) {
        anonymousContestants.push(data.contestants[i]);
        data.contestants.splice(i, 1);
      }
    }
    const createdTournament = new this.tournamentModel({
      ...data,
      linkCode: shortid.generate(),
      createdOn: currentDate,
      updatedOn: currentDate,
      anonymousContestants,
      updates: [
        {
          title: 'Tournament created!',
          description: 'GLHF',
          createdOn: currentDate,
        },
      ],
    });
    return await createdTournament
      .save()
      .then(tournament => {
        return tournament.populate('contestants');
      })
      .then(tournament => {
        tournament = tournament.toJSON();
        tournament.contestants = [
          ...tournament.contestants,
          ...tournament.anonymousContestants,
        ];
        return tournament;
      });
  }

  async findOneById(id: string): Promise<Tournament> {
    return this.tournamentModel.findById(id).exec();
  }

  findOneByLinkCode(linkCode: string): Promise<Tournament> {
    return this.tournamentModel
      .findOne({ linkCode })
      .populate('contestants')
      .populate('updates')
      .populate('createdBy')
      .then(tournament => {
        tournament = tournament.toJSON();
        tournament.contestants = [
          ...tournament.contestants,
          ...tournament.anonymousContestants,
        ];
        return tournament;
      });
  }

  async findAll(tournamentsArgs: TournamentsArgs): Promise<Tournament[]> {
    return await this.tournamentModel.find().exec();
  }

  async updateOne(
    data: UpdateTournamentInput & { [key: string]: any },
  ): Promise<Tournament> {
    console.log('LOOK updateOne data ', JSON.stringify(data));
    // separate anonymous users from regular users
    const { _id, matches = [], updates, ...updateData } = data;
    if (data.contestants && data.contestants.length > 0) {
      const anonymousContestants = [];
      for (let i = data.contestants.length - 1; i >= 0; i--) {
        if (!data.contestants[i].isRegistered) {
          data.contestants[i]._id = new ObjectId() as any
          anonymousContestants.push(data.contestants[i]);
          data.contestants.splice(i, 1);
        }
      }
      updateData.anonymousContestants = anonymousContestants;
    }

    let matchIds: string[] = [];
    if (matches && matches.length > 0) {
      matchIds = matches.map(match => new ObjectId(match._id) as any);
      updateData.matches = {
        $map: {
          input: '$matches',
          as: 'match',
          in: {
            $cond: {
              if: {
                $in: ['$$match._id', matchIds],
              },
              then: {
                $arrayElemAt: [
                  matches,
                  {
                    $indexOfArray: [matchIds, '$$match._id'],
                  },
                ],
              },
              else: '$$match',
            },
          },
        },
      };
    }

    if (updates && updates.length > 0) {
      updates.forEach(update => update._id = new ObjectId(update._id) as any);
      updateData.updates = { $concatArrays: ['$updates', updates] };
    }

    return this.tournamentModel
      .findOneAndUpdate(
        { _id },
        [
          {
            $set: {
              ...updateData,
            },
          },
          // {
          //   $project: {
          //     matches: {
          //       $filter: {
          //         input: '$matches',
          //         as: 'match',
          //         cond: { $in: [ "$$match._id", matchIds ] },
          //       },
          //     },
          //   },
          // },
        ],
        {
          new: true,
        },
      )
      .exec()
      .then(result => {
        result.populate('matches.sets');
        const resultObject = result.toObject();
        const returnObject: any = resultObject;

        returnObject.matches = matches.map(updateDataMatch => {
          // console.log('LOOK updatedDataMatch ', updateDataMatch);
          // console.log('LOOK docMatch ', resultObject.matches.find(
          //   docMatch => updateDataMatch._id == docMatch._id.toString(),
          // ));
          return {
            ...resultObject.matches.find(
              docMatch => updateDataMatch._id == docMatch._id.toString(),
            ),
            ...updateDataMatch,
          };
        });
        // console.log('LOOK updated tournament resultObject ', JSON.stringify(resultObject));
        console.log(
          'LOOK updated tournament returnObject ',
          JSON.stringify(returnObject),
        );

        return this.clean(returnObject);
        // return changedProperties as Tournament;
      })
      .catch(error => {
        throw new Error('Error updating tournament >>> ' + error);
      });
  }

  addContestant(id, contestantName?, userId?) {
    const updateObj = {
      temporaryContestants: null,
      contesants: null,
    };
    if (userId) {
      updateObj.contesants = userId;
    } else if (contestantName) {
      updateObj.temporaryContestants = contestantName;
    } else {
      return;
    }
    return this.tournamentModel
      .findOneAndUpdate({ _id: id }, { $push: updateObj }, { new: true })
      .exec();
  }

  removeContestant(_id, contestantId) {
    return this.tournamentModel
      .updateOne(
        { _id },
        { $pull: { anonymousContestants: { _id: contestantId } as never } },
      )
      .exec();
  }

  remove(id: string): Promise<boolean> {
    return this.tournamentModel
      .deleteOne({ _id: id })
      .then(result => {
        return true;
      })
      .catch(error => {
        throw new Error('Error removing tournament >>> ' + error);
      });
  }

  handleEditAccessRequest(
    requestEditAccessInput: RequestEditAccessInput,
  ): Promise<EditAccessRequest> {
    if (requestEditAccessInput.editAccessCode) {
      return this.tournamentModel
        .findById(requestEditAccessInput.tournamentId, 'editAccessCode')
        .exec()
        .then(result => {
          return {
            canEdit:
              result.editAccessCode === requestEditAccessInput.editAccessCode,
          };
        });
    }
  }

  clean(obj) {
    for (var propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
    return obj;
  }
}
