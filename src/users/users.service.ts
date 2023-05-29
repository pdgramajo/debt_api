import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModule: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userCreated = await this.userModule.create(createUserDto);
    return userCreated;
  }

  async findAll() {
    const users = await this.userModule.aggregate([
      {
        $lookup: {
          from: 'debts', // Nombre de la colección de deudas
          let: { userId: '$_id' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ['$user', '$$userId'] },
                    { $eq: ['$paid', false] },
                  ],
                },
              },
            },
            {
              $project: {
                amount: 1,
                date: 1,
                _id: 0,
              },
            },
          ],
          as: 'debts',
        },
      },
      {
        $addFields: {
          total_amount_due: {
            $sum: '$debts.amount',
          },
          debts: {
            $filter: {
              input: '$debts',
              as: 'debt',
              cond: { $ne: ['$$debt', null] },
            },
          },
          total_debts: {
            $size: '$debts',
          },
        },
      },
      {
        $sort: {
          total_amount_due: -1,
        },
      },
      {
        $project: {
          name: 1,
          phone: 1,
          total_amount_due: 1,
          total_debts: 1,
        },
      },
    ]);
    return users;
  }

  async findOne(id: string) {
    const user = await this.userModule
      .findById(id)
      .select('name phone address')
      .exec();
    return user;

    // const user = await this.userModule.findOne({ _id: id })
    // .select('name phone address')
    // .populate({
    //   path: 'debts',
    //   match: { paid: false },
    // })
    // .exec();

    // return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.userModule.findOneAndUpdate({ _id: id }, updateUserDto);
    const userUpdated = await this.userModule.findById(id);
    return userUpdated;
  }

  async remove(id: string) {
    await this.userModule.findOneAndUpdate({ _id: id }, { deleted: true });
    const userUpdated = await this.userModule.findById(id);
    return userUpdated;
  }
}
