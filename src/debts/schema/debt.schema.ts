import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../../users/schema/user.schema';

export type DebtDocument = HydratedDocument<Debt>;

@Schema({ timestamps: true, versionKey: false })
export class Debt {
  @Prop({ required: true })
  amount: number;

  @Prop({ required: false })
  details: string;

  @Prop({ default: new Date() })
  date: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ default: false })
  paid: boolean;
}

export const DebtSchema = SchemaFactory.createForClass(Debt);
