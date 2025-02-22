import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { Profesor } from './entities/profesor.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProfesorService {
  constructor(
    @InjectRepository(Profesor, 'tareaProyecto')
    private profesorRepository: Repository<Profesor>,
  ) {}

  async crear(createProfesorDto: CreateProfesorDto): Promise<string> {
    await this.profesorRepository.save(createProfesorDto);
    return 'Profesor creado';
  }

  async obtenerTodos(): Promise<Profesor[]> {
    return this.profesorRepository.find();
  }

  async obtenerUno(idProfesor: number): Promise<Profesor> {
    const profesor = await this.profesorRepository.findOne({where: { idProfesor }});
    if (!profesor) {
      throw new NotFoundException('Profesor no encontrado');
    }
    return profesor;
  }

  async actualizar(idProfesor: number, updateProfesorDto: UpdateProfesorDto): Promise<string> {
    await this.profesorRepository.update(idProfesor, updateProfesorDto);
    return 'Profesor actualizado';
  }

  async eliminar(idProfesor: number): Promise<string> {
    await this.profesorRepository.delete(idProfesor);
    return 'Profesor eliminado';
  }

  // Querys

  async buscarPorNombre(nombre: string): Promise<Profesor[]> {
    return this.profesorRepository.find({ where: { nombre } });
  }
  // http://localhost:5000/profesor/buscar/nombre?nombre=[columna - nombre]

  async buscarPorApellido(apellido: string): Promise<Profesor[]> {
    return this.profesorRepository.find({ where: { apellido1: apellido } });
  }
  // http://localhost:5000/profesor/buscar/apellido?apellido=[columna - apellido]

  async buscarPorNif(nif: string): Promise<Profesor[]> {
    return this.profesorRepository.find({ where: { nif } });
  }
  // http://localhost:5000/profesor/buscar/nif?nif=[columna - nif]
}
