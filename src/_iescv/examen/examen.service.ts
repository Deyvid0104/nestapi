import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExamenDto } from './dto/create-examen.dto';
import { UpdateExamenDto } from './dto/update-examen.dto';
import { Examen } from './entities/examen.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExamenService {
  constructor(
    @InjectRepository(Examen, 'tareaProyecto')
    private examenRepository: Repository<Examen>,
  ) {}
  
  async crear(createExamenDto: CreateExamenDto): Promise<string> {
    await this.examenRepository.save(createExamenDto);
    return 'Examen creado';
  }

  async obtenerTodos(): Promise<Examen[]> {
    return this.examenRepository.find();
  }

  async obtenerUno(idExamen: number): Promise<Examen> {
    const examen = await this.examenRepository.findOne({where: { idExamen }});
    if (!examen) {
      throw new NotFoundException('Examen no encontrado');
    }
    return examen;
  }

  async actualizar(idExamen: number, updateExamenDto: UpdateExamenDto): Promise<string> {
    await this.examenRepository.update(idExamen, updateExamenDto);
    return 'Examen actualizado';
  }

  async eliminar(idExamen: number): Promise<string> {
    await this.examenRepository.delete(idExamen);
    return 'Examen eliminado';
  }

  // Querys

  async buscarPorTitulo(titulo: string): Promise<Examen[]> {
    return this.examenRepository.find({ where: { titulo } });
  }
  // http://localhost:5000/examen/buscar/titulo?titulo=[columna - titulo]

  async buscarPorFecha(fecha: string): Promise<Examen[]> {
    return this.examenRepository.find({ where: { fecha } });
  }
  // http://localhost:5000/examen/buscar/fecha?fecha=[columna - fecha]

  async buscarPorNumPreguntas(numPreguntas: number): Promise<Examen[]> {
    return this.examenRepository.find({ where: { numPreguntas } });
  }
  // http://localhost:5000/examen/buscar/numPreguntas?numPreguntas=[columna - numPreguntas]
}
