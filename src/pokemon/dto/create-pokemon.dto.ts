import { IsString, IsInt } from 'class-validator';

export class CreatePokemonDto {
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
