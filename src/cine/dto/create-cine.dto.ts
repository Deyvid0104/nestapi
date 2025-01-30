import { IsString, Min } from 'class-validator';

export class CreateCineDto {
    @IsString()
    titulo: string;

    @IsString()
    director: string;

    @Min(0,{message:"El año de lanzamiento tiene que ser positivo"})
    lanzamiento: number;

    @Min(0,{message:"El tiempo de duración tiene que ser positivo"})
    duracion: number;
}
