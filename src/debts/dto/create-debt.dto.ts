import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { UpdateDebtDto } from './update-debt.dto';

export class CreateDebtDto extends PartialType(UpdateDebtDto) {
  @IsNotEmpty()
  @IsString()
  user: string;
}
