import { IsDateString, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateExamenDto {
    @IsNotEmpty()
    @IsString()
    titulo: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    numPreguntas: number;

    @IsNotEmpty()
    @IsDateString()
    fecha: string;
}
