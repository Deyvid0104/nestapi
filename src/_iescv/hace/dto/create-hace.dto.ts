import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class CreateHaceDto {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    idAlumno: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    idExamen: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    nota: number;
}
