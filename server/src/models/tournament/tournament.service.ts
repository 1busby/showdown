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
export class TournamentService {
  constructor(
    @InjectModel('Tournament')
    private readonly tournamentModel: Model<Tournament>,
    private logger: CustomLogger,
  ) {}

  async create(data: NewTournamentInput): Promise<Tournament> {
    // const anonymousContestants = [];
    const currentDate = Date.now();

    // tslint:disable-next-line: prefer-for-of
    // for (let i = data.contestants.length - 1; i >= 0; i--) {
    //   if (!data.contestants[i].isRegistered) {
    //     anonymousContestants.push(data.contestants[i]);
    //     data.contestants.splice(i, 1);
    //   }
    // }
    const createdTournament = new this.tournamentModel({
      ...data,
      linkCode: shortid.generate(),
      createdOn: currentDate,
      updatedOn: currentDate,
      // anonymousContestants,
      updates: [
        {
          title: 'Tournament created!',
          // description: 'GLHF',
          createdOn: currentDate,
        },
      ],
    });
    return await createdTournament.save().then(tournament => {
      return tournament.populate('contestants').populate('contestants.profile');
    });
    // .then(tournament => {
    //   tournament = tournament.toJSON();
    //   tournament.contestants = [
    //     ...tournament.contestants,
    //     ...tournament.anonymousContestants,
    //   ];
    //   return tournament;
    // });
  }

  findOneById(id: string): Promise<Tournament> {
    return (
      this.tournamentModel
        .findById(id)
        .populate('updates')
        .populate('createdBy')
        .populate('registrationRequests')
        .populate('contestants')
        .populate({
          path: 'contestants',
          populate: {
            path: 'profile',
            model: 'User',
          },
        })
        // .populate('registrationRequests')
        // .populate({
        //   path: 'registrationRequests.contestant',
        //   model: 'Contestant',
        // })
        // .populate({
        //   path: 'registrationRequests.contestant.profile',
        //   model: 'User',
        // })
        // .then(tournament => {
        //   tournament = tournament.toJSON();
        //   tournament.contestants = [
        //     ...tournament.contestants,
        //     ...tournament.anonymousContestants,
        //   ];
        //   return tournament;
        // });
        .exec()
    );
  }

  findOneByLinkCode(linkCode: string): Promise<Tournament> {
    return (
      this.tournamentModel
        .findOne({ linkCode })
        .populate('updates')
        .populate('createdBy')
        .populate('registrationRequests')
        .populate('contestants')
        .populate({
          path: 'contestants',
          populate: {
            path: 'profile',
            model: 'User',
          },
        })
        // .populate({
        //   path: 'registrationRequests.contestant',
        //   model: 'Contestant',
        // })
        // .populate({
        //   path: 'registrationRequests.contestant.profile',
        //   model: 'User',
        // })
        // .then(tournament => {
        //   tournament = tournament.toJSON();
        //   tournament.contestants = [
        //     ...tournament.contestants,
        //     ...tournament.anonymousContestants,
        //   ];
        //   return tournament;
        // });
        .exec()
    );
  }

  findAll(tournamentsArgs: TournamentsArgs): Promise<Tournament[]> {
    return this.tournamentModel
      .find()
      .populate('createdBy')
      .exec();
  }

  findAllByUser(tournamentsArgs: TournamentsArgs): Promise<Tournament[]> {
    const pipeline: any = [];

    pipeline.push({
      $lookup: {
        from: 'users',
        localField: 'createdBy',
        foreignField: '_id',
        as: 'createdByUser',
      },
    });
    pipeline.push({
      $match: { 'createdByUser._id': tournamentsArgs.userId },
    });
    return this.tournamentModel.aggregate(pipeline).exec();
  }

  async updateOne(
    data: UpdateTournamentInput & { [key: string]: any },
  ): Promise<Tournament> {
    console.log('LOOK updateOne data ', JSON.stringify(data));
    // separate anonymous users from regular users
    const {
      _id,
      matches = [],
      updates,
      registrationRequests,
      ...updateData
    } = data;

    if (updateData.contestants && updateData.contestants.length > 0) {
      updateData.contestants.forEach(contestant => {
        if (contestant._id) {
          contestant._id = new ObjectId(contestant._id) as any;
        } else {
          contestant._id = new ObjectId() as any;
        }
      });
    }

    let matchIds: string[] = [];
    const newMatches = [];
    if (matches && matches.length > 0) {
      matchIds = matches.map(match => {
        if (match._id) {
          match._id = new ObjectId(match._id) as any;
        } else {
          match._id = new ObjectId() as any;
          newMatches.push(match);
        }

        match.sets.forEach(set => {
          if (set._id) {
            set._id = new ObjectId(set._id) as any;
          } else {
            set._id = new ObjectId() as any;
          }
        });
        return match._id;
      });
      updateData.matches = {
        $concatArrays: [
          {
            $map: {
              input: '$matches',
              as: 'match',
              in: {
                $cond: {
                  if: {
                    $in: ['$$match._id', matchIds],
                  },
                  then: {
                    $mergeObjects: [
                      '$$match',
                      {
                        $arrayElemAt: [
                          matches,
                          {
                            $indexOfArray: [matchIds, '$$match._id'],
                          },
                        ],
                      },
                    ],
                  },
                  else: '$$match',
                },
              },
            },
          },
          newMatches,
        ],
      };
    }

    let registrationRequestIds: string[] = [];
    if (registrationRequests && registrationRequests.length > 0) {
      registrationRequestIds = registrationRequests.map(request => {
        request._id = new ObjectId(request._id) as any;
        return request._id;
      });
      updateData.registrationRequests = {
        $map: {
          input: '$registrationRequests',
          as: 'request',
          in: {
            $cond: {
              if: {
                $in: ['$$request._id', registrationRequestIds],
              },
              then: {
                $mergeObjects: [
                  '$$request',
                  {
                    $arrayElemAt: [
                      registrationRequests,
                      {
                        $indexOfArray: [
                          registrationRequestIds,
                          '$$request._id',
                        ],
                      },
                    ],
                  },
                ],
              },
              else: '$$request',
            },
          },
        },
      };
    }

    if (updates && updates.length > 0) {
      updates.forEach(update => (update._id = new ObjectId(update._id) as any));
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
      .populate({
        path: 'matches',
        populate: {
          path: 'sets',
          model: 'Set',
        },
      })
      .populate({
        path: 'contestants',
        populate: {
          path: 'profile',
          model: 'User',
        },
      })
      .then(result => {
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

  addContestant(tournamentId, seed?, name?, userId?) {
    this.logger.log('LOOK addContestant seed ', seed);
    this.logger.log('LOOK addContestant userId ', userId);
    const contestant = {
      _id: new ObjectId(),
      seed,
      name,
      profile: { _id: new ObjectId(userId) } as any,
    };

    return this.tournamentModel
      .findOneAndUpdate(
        { _id: tournamentId },
        { $push: { contestants: contestant } },
        { new: true },
      )
      .populate({
        path: 'contestants',
        populate: {
          path: 'profile',
          model: 'User',
        },
      })
      .exec();
  }

  removeContestant(_id, contestantId) {
    return this.tournamentModel
      .updateOne(
        { _id },
        { $pull: { contestants: { _id: contestantId } as never } },
        // { $pull: { anonymousContestants: { _id: contestantId } as never } },
      )
      .exec();
  }

  addRegistrationRequest(tournamentId, request) {
    return this.tournamentModel
      .findOneAndUpdate(
        { _id: tournamentId },
        { $push: { registrationRequests: request } },
        { new: true },
      )
      .populate({
        path: 'registrationRequests',
        populate: {
          path: 'contestant',
          model: 'Contestant',
          populate: {
            path: 'profile',
            model: 'User',
          },
        },
      })
      .exec();
  }

  remove(_id: string): Promise<boolean> {
    return this.tournamentModel
      .deleteOne({ _id })
      .then(result => {
        if (result.ok !== 1) {
          return false;
        }

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
