import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewUserInput } from './dto/new-user.input';
import { UsersArgs } from './dto/users.args';
import { User } from './user';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(data: NewUserInput): Promise<User> {
    const createdUser = new this.userModel({
      ...data,
      createdOn: Date.now(),
      updatedOn: Date.now(),
    });
    return await createdUser.save();
  }

  async findOneById(id: string): Promise<User> {
    return {} as any;
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
