import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true, versionKey: false })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phone: number;

  @Prop()
  address: string;

  @Prop({ default: false, select: false })
  deleted: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
