import { IsDateString, IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class CreateDiseñaDto {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    idProfesor: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    idAlumno: number;

    @IsNotEmpty()
    @IsDateString()
    fecha: string;
}
