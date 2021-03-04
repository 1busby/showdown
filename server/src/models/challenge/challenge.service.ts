import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as shortid from 'shortid';
import { ObjectId } from 'mongodb';

import { NewChallengeInput } from './dto/new-Challenge.input';
import { ChallengesArgs } from './dto/challenges.args';
import { Challenge } from './challenge.model';
import { UpdateChallengeInput } from './dto/update-Challenge.input';
import { CustomLogger } from '@shared/index';
import { merge } from 'rxjs';

@Injectable()
export class ChallengeService {
  constructor(
    @InjectModel('Challenge')
    private readonly challengeModel: Model<Challenge>,
    private logger: CustomLogger,
  ) {}

  async create(data: NewChallengeInput): Promise<Challenge> {
    const anonymousContestants = [];
    const currentDate = Date.now();

    // tslint:disable-next-line: prefer-for-of
    for (let i = data.contestants.length - 1; i >= 0; i--) {
      if (!data.contestants[i].isRegistered) {
        anonymousContestants.push(data.contestants[i]);
        data.contestants.splice(i, 1);
      }
    }
    const createdChallenge = new this.challengeModel({
      ...data,
      linkCode: shortid.generate(),
      createdOn: currentDate,
      updatedOn: currentDate,
      anonymousContestants,
      updates: [
        {
          title: 'Showdown created!',
          description: 'GLHF',
          createdOn: currentDate,
        },
      ],
    });
    return await createdChallenge
      .save()
      .then(challenge => {
        return challenge.populate('contestants');
      })
      .then(challenge => {
        challenge = challenge.toJSON();
        challenge.contestants = [
          ...challenge.contestants,
          ...challenge.anonymousContestants,
        ];
        return challenge;
      });
  }

  async findOneById(id: string): Promise<Challenge> {
    return this.challengeModel.findById(id).exec();
  }

  findOneByLinkCode(linkCode: string): Promise<Challenge> {
    return this.challengeModel
      .findOne({ linkCode })
      .populate('contestants')
      .populate('updates')
      .then(challenge => {
        challenge = challenge.toJSON();
        challenge.contestants = [
          ...challenge.contestants,
          ...challenge.anonymousContestants,
        ];
        return challenge;
      });
  }

  async findAll(challengesArgs: ChallengesArgs): Promise<Challenge[]> {
    return await this.challengeModel.find().exec();
  }

  async updateOne(
    data: UpdateChallengeInput & { [key: string]: any },
  ): Promise<Challenge> {
    console.log('LOOK updateOne data ', JSON.stringify(data));
    // separate anonymous users from regular users
    const { _id, matches = [], updates, ...updateData } = data;
    if (data.contestants && data.contestants.length > 0) {
      const anonymousContestants = [];
      for (let i = data.contestants.length - 1; i >= 0; i--) {
        if (!data.contestants[i].isRegistered) {
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

    return this.challengeModel
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
        // console.log('LOOK updated Challenge resultObject ', JSON.stringify(resultObject));
        console.log(
          'LOOK updated Challenge returnObject ',
          JSON.stringify(returnObject),
        );

        return this.clean(returnObject);
        // return changedProperties as Challenge;
      })
      .catch(error => {
        throw new Error('Error updating Challenge >>> ' + error);
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
    return this.challengeModel
      .findOneAndUpdate({ _id: id }, { $push: updateObj }, { new: true })
      .exec();
  }

  removeContestant(_id, contestantId) {
    return this.challengeModel
      .updateOne(
        { _id },
        { $pull: { anonymousContestants: { _id: contestantId } as never } },
      )
      .exec();
  }

  remove(id: string): Promise<boolean> {
    return this.challengeModel
      .deleteOne({ _id: id })
      .then(result => {
        return true;
      })
      .catch(error => {
        throw new Error('Error removing Challenge >>> ' + error);
      });
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
