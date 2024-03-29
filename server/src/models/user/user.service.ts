import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';

import { NewUserInput } from './dto/new-user.input';
import { UsersArgs } from './dto/users.args';
import { User } from './user.model';
import { UpdateUserInput } from './dto/update-user.input';
@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  create(data: NewUserInput): Promise<User> {
    const createdUser = new this.userModel({
      ...data,
      tournaments: [],
      createdOn: Date.now(),
      updatedOn: Date.now(),
    });
    return createdUser.save();
  }

  async findOneById(dId: string): Promise<User> {
    return this.userModel.findOne({ dId });
  }

  findOne({ username }): Promise<User> {
    return this.userModel.findOne({ username }).populate('tournaments').exec();
  }

  async findOneByToken(token: string): Promise<User> {
    return {} as any;
  }

  async findAll(usersArgs: UsersArgs): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  updateOne(data: UpdateUserInput & { [key: string]: any }) {
    const { _id, tournaments, ...updateData } = data;

    if (tournaments && tournaments.length > 0) {
      updateData.tournaments = { $concatArrays: ['$tournaments', tournaments] };
    }

    return this.userModel
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
      .catch(error => {
        throw new Error('Error updating tournament >>> ' + error);
      });
  }

  incrementWins(_id) {
    return this.userModel.updateOne(
      { _id },
      { $inc: { numWins: 1 } }
    ).exec();
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
