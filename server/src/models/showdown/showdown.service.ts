import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as shortid from 'shortid';
import { ObjectId } from 'mongodb';

import { NewShowdownInput } from './dto/new-showdown.input';
import { ShowdownsArgs } from './dto/showdowns.args';
import { Showdown } from './showdown.model';
import { UpdateShowdownInput } from './dto/update-showdown.input';
import { CustomLogger } from '@shared/index';

@Injectable()
export class ShowdownService {
  constructor(
    @InjectModel('Showdown')
    private readonly showdownModel: Model<Showdown>,
    private logger: CustomLogger,
  ) {}

  async create(data: NewShowdownInput): Promise<Showdown> {
    const currentDate = Date.now();

    // tslint:disable-next-line: prefer-for-of
    const createdShowdown = new this.showdownModel({
      ...data,
      linkCode: shortid.generate(),
      createdOn: currentDate,
      updatedOn: currentDate,
      updates: [
        {
          title: 'Showdown created!',
          description: 'GLHF',
          createdOn: currentDate,
        },
      ],
    });
    return await createdShowdown
      .save()
      .then(showdown => {
        return showdown.populate('contestants');
      });
  }

  async findOneById(id: string): Promise<Showdown> {
    return this.showdownModel.findById(id).exec();
  }

  findOneByLinkCode(linkCode: string): Promise<Showdown> {
    return this.showdownModel
      .findOne({ linkCode })
      .populate('contestants')
      .populate('updates')
      .exec();
  }

  async findAll(showdownsArgs: ShowdownsArgs): Promise<Showdown[]> {
    return await this.showdownModel.find().exec();
  }

  async updateOne(
    data: UpdateShowdownInput & { [key: string]: any },
  ): Promise<Showdown> {
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

    return this.showdownModel
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
        // console.log('LOOK updated Showdown resultObject ', JSON.stringify(resultObject));
        console.log(
          'LOOK updated Showdown returnObject ',
          JSON.stringify(returnObject),
        );

        return this.clean(returnObject);
        // return changedProperties as Showdown;
      })
      .catch(error => {
        throw new Error('Error updating Showdown >>> ' + error);
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
    return this.showdownModel
      .findOneAndUpdate({ _id: id }, { $push: updateObj }, { new: true })
      .exec();
  }

  removeContestant(_id, contestantId) {
    return this.showdownModel
      .updateOne(
        { _id },
        { $pull: { anonymousContestants: { _id: contestantId } as never } },
      )
      .exec();
  }

  remove(id: string): Promise<boolean> {
    return this.showdownModel
      .deleteOne({ _id: id })
      .then(result => {
        return true;
      })
      .catch(error => {
        throw new Error('Error removing Showdown >>> ' + error);
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
