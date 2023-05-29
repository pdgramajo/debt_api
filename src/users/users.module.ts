import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DebtsService } from '../debts/debts.service';
import { PaymentsService } from '../payments/payments.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schema/user.schema';
import { Debt, DebtSchema } from '../debts/schema/debt.schema';
import { Payment, PaymentSchema } from '../payments/schema/payment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Debt.name,
        schema: DebtSchema,
      },
      {
        name: Payment.name,
        schema: PaymentSchema,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, DebtsService, PaymentsService],
})
export class UsersModule {}
