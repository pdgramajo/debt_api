import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateDebtDto } from './dto/create-debt.dto';
import { UpdateDebtDto } from './dto/update-debt.dto';
import { Debt, DebtDocument } from './schema/debt.schema';
import { Model } from 'mongoose';
@Injectable()
export class DebtsService {
  constructor(
    @InjectModel(Debt.name) private debtModule: Model<DebtDocument>,
  ) {}

  async create(createDebtDto: CreateDebtDto) {
    const debtCreated = await this.debtModule.create(createDebtDto);
    return debtCreated;
  }

  async findAll() {
    const data = await this.debtModule.aggregate([
      {
        $lookup: {
          from: 'users', // Nombre de la colección de usuarios
          localField: 'user',
          foreignField: '_id',
          as: 'user',
        },
      },
      {
        $unwind: '$user',
      },
      {
        $addFields: {
          user: '$user.name',
        },
      },
      {
        $match: {
          paid: false,
        },
      },
      {
        $project: {
          _id: 1,
          amount: 1,
          date: 1,
          paid: 1,
          user: 1,
        },
      },
    ]);

    return data;

    // const data = await this.debtModule.aggregate([
    //   {
    //     $lookup: {
    //       from: 'users', // Nombre de la colección de usuarios
    //       localField: 'user',
    //       foreignField: '_id',
    //       as: 'user',
    //     },
    //   },
    //   {
    //     $unwind: '$user',
    //   },
    //   {
    //     $addFields: {
    //       user: '$user.name',
    //     },
    //   },
    //   {
    //     $match: {
    //       paid: false,
    //     },
    //   },
    //   {
    //     $group: {
    //       _id: null,
    //       total_amount_due: {
    //         $sum: '$amount',
    //       },
    //       debts: {
    //         $push: {
    //           _id: '$_id',
    //           amount: '$amount',
    //           date: '$date',
    //           paid: '$paid',
    //           user: '$user',
    //         },
    //       },
    //     },
    //   },
    //   {
    //     $project: {
    //       _id: 0,
    //       total_amount_due: 1,
    //       debts: 1,
    //     },
    //   },
    // ]);
  }

  async getTotalDebtAmount(): Promise<number> {
    const result = await this.debtModule.aggregate([
      {
        $group: {
          _id: null,
          totalDebtAmount: { $sum: '$amount' },
        },
      },
    ]);
    console.log(
      '🚀 ~ file: debts.service.ts:112 ~ DebtsService ~ getTotalDebtAmount ~ result:',
      result,
    );

    if (result.length > 0) {
      return result[0].totalDebtAmount;
    } else {
      return 0;
    }
  }

  async findAllByUserId(userId: string): Promise<UpdateDebtDto[]> {
    const debts = await this.debtModule.find({ user: userId });
    return debts;
  }

  async findOne(id: string) {
    const debt = await this.debtModule.findById(id);
    return debt;
  }

  async update(id: string, updateDebtDto: UpdateDebtDto) {
    await this.debtModule.findOneAndUpdate({ _id: id }, updateDebtDto);
    const debtUpdated = await this.debtModule.find({ _id: id });
    return debtUpdated;
  }

  async removeDebtsByUserId(userId: string) {
    await this.debtModule.updateMany({ user: userId }, { paid: true }).exec();
  }

  async remove(id: string) {
    await this.debtModule.findOneAndUpdate({ _id: id }, { paid: true });
    const debtUpdated = await this.debtModule.findById(id);
    return debtUpdated;
  }
}
