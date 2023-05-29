import { Module } from '@nestjs/common';
import { DebtsModule } from './debts/debts.module';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb+srv://root:root@cluster1.spqdyk3.mongodb.net/DebtDB'),
    MongooseModule.forRoot('mongodb://localhost:27017/DebtDB'),
    DebtsModule,
    UsersModule,
    PaymentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
