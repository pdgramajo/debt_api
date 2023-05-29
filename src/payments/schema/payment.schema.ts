import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { User } from '../..//users/schema/user.schema';

export type PaymentDocument = HydratedDocument<Payment>;

@Schema({ timestamps: true, versionKey: false })
export class Payment {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: User;

  @Prop()
  amount: number;

  @Prop({ default: false, select: false })
  deleted: boolean;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
