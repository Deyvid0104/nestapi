import { Min, IsString } from 'class-validator';
import { CreateCineDto } from './create-cine.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCineDto extends PartialType(CreateCineDto) {
    @IsString()
    titulo: string;

    @IsString()
    director: string;

    @Min(0,{message:"El año de lanzamiento tiene que ser positivo"})
    lanzamiento: number;

    @Min(0,{message:"El tiempo de duración tiene que ser positivo"})
    duracion: number;
}
