import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';
import { Practica } from './entities/practica.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PracticaService {
  constructor(
    @InjectRepository(Practica, 'tareaProyecto')
    private practicaRepository: Repository<Practica>,
  ) {}

  async crear(createPracticaDto: CreatePracticaDto): Promise<string> {
    await this.practicaRepository.save(createPracticaDto);
    return 'Práctica creada';
  }

  async obtenerTodos(): Promise<Practica[]> {
    return this.practicaRepository.find();
  }

  async obtenerUno(idPractica: number): Promise<Practica> {
    const practica = await this.practicaRepository.findOne({where: { idPractica }});
    if (!practica) { throw new NotFoundException('Práctica no encontrada'); }
    return practica;
  }

  async actualizar(idPractica: number, updatePracticaDto: UpdatePracticaDto): Promise<string> {
    await this.practicaRepository.update(idPractica, updatePracticaDto); return 'Práctica actualizada';
  }

  async eliminar(idPractica: number): Promise<string> {
    await this.practicaRepository.delete(idPractica); return 'Práctica eliminada';
  }

  // Query

  async buscarPorTitulo(titulo: string): Promise<Practica[]> {
    return this.practicaRepository.find({ where: { titulo } });
  }
  // http://localhost:5000/practica/buscar/titulo?titulo=[columna - titulo]

  async buscarPorDificultad(dificultad: string): Promise<Practica[]> {
    return this.practicaRepository.find({ where: { dificultad } });
  }
  // http://localhost:5000/practica/buscar/dificultad?dificultad=[columna - dificultad]
}
