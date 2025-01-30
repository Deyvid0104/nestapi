import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Repository, MoreThan, LessThan } from 'typeorm';

@Injectable()
export class PokemonService {
    constructor(
        @InjectRepository(Pokemon, 'tarea')
        private pokemonRepository: Repository<Pokemon>,
    ) {}

    async crear(crearPokemonDto: CreatePokemonDto): Promise<Pokemon> {
        const pokemon = this.pokemonRepository.create(crearPokemonDto);
        return this.pokemonRepository.save(pokemon);
    }

    async obtenerTodos(): Promise<Pokemon[]> {
        return this.pokemonRepository.find();
    }

    async obtenerUno(id: number): Promise<Pokemon> {
        const pokemon = await this.pokemonRepository.findOne({ where: { id } });
        if (!pokemon) {
            throw new NotFoundException(`Pokémon con id ${id} no encontrado`);
        }
        return pokemon;
    }

    async actualizar(id: number, actualizarPokemonDto: UpdatePokemonDto): Promise<string> {
        const pokemon = await this.obtenerUno(id);
        this.pokemonRepository.merge(pokemon, actualizarPokemonDto);
        await this.pokemonRepository.save(pokemon);
        return `El Pokémon con id #${id} ha sido modificado`;
    }

    async eliminar(id: number): Promise<string> {
        const pokemon = await this.obtenerUno(id);
        await this.pokemonRepository.remove(pokemon);
        return 'El Pokémon ha sido eliminado de la base de datos';
    }

    async buscarPorNombre(nombre: string): Promise<Pokemon[]> {
        return this.pokemonRepository.find({ where: { nombre } });
    }

    async buscarPorDefensaMenorQue(defensa: number): Promise<Pokemon[]> {
        return this.pokemonRepository.find({ where: { defensa: LessThan(defensa) } });
    }

    async buscarPorAtaqueMayorQue(ataque: number): Promise<Pokemon[]> {
        return this.pokemonRepository.find({ where: { ataque: MoreThan(ataque) } });
    }

    async buscarPorHPMayorQue(HP: number): Promise<Pokemon[]> {
        return this.pokemonRepository.find({ where: { HP: MoreThan(HP) } });
    }

    async buscarPorHPMenorQue(HP: number): Promise<Pokemon[]> {
        return this.pokemonRepository.find({ where: { HP: LessThan(HP) } });
    }

    async buscarInfoPorNombre(nombre: string): Promise<{ id: number; nombre: string; img: string }> {
        const pokemon = await this.pokemonRepository.findOne({
            where: { nombre },
            select: ['id', 'nombre', 'img'], // Selecciona solo los campos necesarios
        });

        if (!pokemon) {
            throw new NotFoundException(`No se encontró un Pokémon con el nombre ${nombre}`);
        }

        return {
            id: pokemon.id,
            nombre: pokemon.nombre,
            img: pokemon.img,
        };
    }

    async buscarInfoPorId(id: number): Promise<{ id: number; nombre: string; img: string }> {
        const pokemon = await this.pokemonRepository.findOne({
            where: { id },
            select: ['id', 'nombre', 'img'], // Selecciona solo los campos necesarios
        });

        if (!pokemon) {
            throw new NotFoundException(`No se encontró un Pokémon con el id ${id}`);
        }

        return {
            id: pokemon.id,
            nombre: pokemon.nombre,
            img: pokemon.img,
        };
    }
}