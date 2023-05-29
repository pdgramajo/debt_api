import { IsNotEmpty, IsNumber, IsEmpty } from 'class-validator';

export class UpdateDebtDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;
  @IsEmpty({
    message: 'You can`t edit the paid field.',
  })
  paid: Boolean;
}
