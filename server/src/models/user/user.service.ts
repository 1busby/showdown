import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { NewUserInput } from './dto/new-user.input';
import { UsersArgs } from './dto/users.args';
import { User } from './user.model';
@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  create(data: NewUserInput): Promise<User> {
    console.log('LOOK new user data ', data);
    const createdUser = new this.userModel({
      ...data,
      createdOn: Date.now(),
      updatedOn: Date.now(),
    });
    return createdUser.save();
  }
  
  async findOneById(dId: string): Promise<User> {
    return this.userModel.findOne({ dId });
  }
  
  findOne({ username }): Promise<User> {
    console.log('LOOK signin Data ', username);
    return this.userModel.findOne({username}).exec();
  }

  async findOneByToken(token: string): Promise<User> {
    return {} as any;
  }

  async findAll(usersArgs: UsersArgs): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
