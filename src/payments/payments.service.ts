import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Payment, PaymentDocument } from './schema/payment.schema';
import { Model } from 'mongoose';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectModel(Payment.name)
    private readonly paymentModule: Model<PaymentDocument>,
  ) {}

  async create(userId: string, createPaymentDto: CreatePaymentDto) {
    createPaymentDto.user = userId;
    const paymentCreated = await this.paymentModule.create(createPaymentDto);
    return paymentCreated;
  }

  async findAllByUserId(userId: string) {
    const payments = await this.paymentModule.find({ user: userId });
    return payments;
  }

  async findLastPaymentsByUserId(userId: string) {
    const payments = await this.paymentModule
      .find({ user: userId, deleted: false })
      .exec();
    return payments;
  }

  async deletePaymentsByUserId(userId: string) {
    await this.paymentModule
      .updateMany({ user: userId }, { deleted: true })
      .exec();
  }

  async remove(id: string) {
    await this.paymentModule.findOneAndUpdate({ _id: id }, { deleted: true });
    const debtUpdated = await this.paymentModule.findById(id);
    return debtUpdated;
  }
}
