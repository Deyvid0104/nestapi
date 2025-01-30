import { Controller, Get, Post, Body, Param, Delete, Put, Query, NotFoundException } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Controller('pokemon')
export class PokemonController {
    constructor(private readonly pokemonService: PokemonService) {}

    @Post()
    async crear(@Body() crearPokemonDto: CreatePokemonDto): Promise<Pokemon> {
        return this.pokemonService.crear(crearPokemonDto);
    }

    @Get()
    async obtenerTodos(): Promise<Pokemon[]> {
        return this.pokemonService.obtenerTodos();
    }

    @Get(':id')
    async obtenerUno(@Param('id') id: number): Promise<Pokemon> {
        return this.pokemonService.obtenerUno(id);
    }

    @Put(':id')
    async actualizar(@Param('id') id: number, @Body() actualizarPokemonDto: UpdatePokemonDto): Promise<string> {
        return this.pokemonService.actualizar(id, actualizarPokemonDto);
    }

    @Delete(':id')
    async eliminar(@Param('id') id: number): Promise<string> {
        return this.pokemonService.eliminar(id);
    }

    // Querys

    @Get('buscar/nombre')
    async buscarPorNombre(@Query('nombre') nombre: string): Promise<Pokemon[]> {
        const pokemons = await this.pokemonService.buscarPorNombre(nombre);
        if (pokemons.length === 0) {
            throw new NotFoundException(`No se encontraron Pokémon con el nombre ${nombre}`);
        }
        return pokemons;
        // http://localhost:5000/pokemon/buscar/nombre?nombre=[columna - nombre]
    }

    @Get('buscar/defensa/menor')
    async buscarPorDefensaMenorQue(@Query('defensa') defensa: number): Promise<Pokemon[]> {
        return this.pokemonService.buscarPorDefensaMenorQue(defensa);
        // http://localhost:5000/pokemon/buscar/defensa/menor?defensa=[columna - defensa]
    }

    @Get('buscar/ataque/mayor')
    async buscarPorAtaqueMayorQue(@Query('ataque') ataque: number): Promise<Pokemon[]> {
        return this.pokemonService.buscarPorAtaqueMayorQue(ataque);
        // http://localhost:5000/pokemon/buscar/ataque/mayor?ataque=[columna - ataque]
    }

    @Get('buscar/HP/mayor')
    async buscarPorHPMayorQue(@Query('HP') HP: number): Promise<Pokemon[]> {
        return this.pokemonService.buscarPorHPMayorQue(HP);
        // http://localhost:5000/pokemon/buscar/HP/mayor?HP=[columna - HP]
    }

    @Get('buscar/HP/menor')
    async buscarPorHPMenorQue(@Query('HP') HP: number): Promise<Pokemon[]> {
        return this.pokemonService.buscarPorHPMenorQue(HP);
        // http://localhost:5000/pokemon/buscar/HP/menor?HP=[columna - HP]
    }

    @Get('buscar/info/nombre')
    async buscarInfoPorNombre(@Query('nombre') nombre: string): Promise<{ id: number; nombre: string; img: string }> {
        return this.pokemonService.buscarInfoPorNombre(nombre);
        // http://localhost:5000/pokemon/buscar/info/nombre?nombre=[columna - nombre]
    }

    @Get('buscar/info/id')
    async buscarInfoPorId(@Query('id') id: number): Promise<{ id: number; nombre: string; img: string }> {
        return this.pokemonService.buscarInfoPorId(id);
        // http://localhost:5000/pokemon/buscar/info/id?id=[columna - id]
    }
}