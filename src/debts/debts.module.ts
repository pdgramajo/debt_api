import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { DebtsService } from './debts.service';
import { DebtsController } from './debts.controller';
import { Debt, DebtSchema } from './schema/debt.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Debt.name,
        schema: DebtSchema,
      },
    ]),
  ],
  controllers: [DebtsController],
  providers: [DebtsService],
})
export class DebtsModule {}
