import { IsDateString, IsNotEmpty, IsNumber, IsPositive,
    } from 'class-validator';

export class CreateRealizaDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  idAlumno: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  idPractica: number;

  @IsNotEmpty()
  @IsDateString()
  fecha: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  nota: number;
}
