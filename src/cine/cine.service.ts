import { Injectable, NotFoundException } from '@nestjs/common';
import { MoreThan, LessThan } from 'typeorm';
import { CreateCineDto } from './dto/create-cine.dto';
import { UpdateCineDto } from './dto/update-cine.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cine } from './entities/cine.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CineService {
  constructor(
    @InjectRepository(Cine, 'tarea')
    private cineRepository: Repository<Cine>,
  ) {}

  async crear(crearCineDto: CreateCineDto): Promise<Cine> {
    const cine = this.cineRepository.create(crearCineDto);
    return this.cineRepository.save(cine);
  }

  async obtenerTodos(): Promise<Cine[]> {
    return this.cineRepository.find();
  }

  async obtenerUno(id: number): Promise<Cine> {
    const cine = await this.cineRepository.findOne({ where: { id } });
    if (!cine) {
      throw new NotFoundException(`La película con id #${id} no se encuentra en la base de datos`);
    }
    return cine;
  }

  async actualizar(id: number, actualizarCineDto: UpdateCineDto): Promise<string> {
    const cine = await this.obtenerUno(id);
    this.cineRepository.merge(cine, actualizarCineDto);
    await this.cineRepository.save(cine);
    return `La película con id #${id} ha sido modificada`;
  }

  async eliminar(id: number): Promise<string> {
    const cine = await this.obtenerUno(id);
    await this.cineRepository.remove(cine);
    return 'La película ha sido eliminada de la base de datos';
  }

  async buscarPorTitulo(titulo: string): Promise<Cine[]> {
    return this.cineRepository.find({ where: { titulo } });
  }

  async buscarPorDirector(director: string): Promise<Cine[]> {
    return this.cineRepository.find({ where: { director } });
  }

  async buscarPorAnioLanzamientoMayorQue(lanzamiento: number): Promise<Cine[]> {
    return this.cineRepository.find({ where: { lanzamiento: MoreThan(lanzamiento) } });
  }

  async buscarPorAnioLanzamientoMenorQue(lanzamiento: number): Promise<Cine[]> {
    return this.cineRepository.find({ where: { lanzamiento: LessThan(lanzamiento) } });
  }

  async buscarPorDuracionMayorQue(duracion: number): Promise<Cine[]> {
    return this.cineRepository.find({ where: { duracion: MoreThan(duracion) } });
  }

  async buscarPorDuracionMenorQue(duracion: number): Promise<Cine[]> {
    return this.cineRepository.find({ where: { duracion: LessThan(duracion) } });
  }
}