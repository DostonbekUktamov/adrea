import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLicenseDto {

  @IsString()
  @IsNotEmpty()
  aggregator: string;

  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
