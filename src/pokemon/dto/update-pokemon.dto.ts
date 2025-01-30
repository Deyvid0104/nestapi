import { IsString, IsInt } from 'class-validator';
import { CreatePokemonDto } from './create-pokemon.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {
    @IsInt()
    id: number;

    @IsString()
    nombre: string;

    @IsInt()
    HP: number;

    @IsInt()
    ataque: number;

    @IsInt()
    defensa: number;

    @IsString()
    img: string;
}
