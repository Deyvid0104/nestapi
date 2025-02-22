import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumno } from './entities/alumno.entity';

@Injectable()
export class AlumnoService {
  constructor(
    @InjectRepository(Alumno, 'tareaProyecto')
    private alumnoRepository: Repository<Alumno>,
  ) {}

  async crear(createAlumnoDto: CreateAlumnoDto): Promise<string> {
    await this.alumnoRepository.save(createAlumnoDto);
    return 'Alumno creado';
  }

  async obtenerTodos(): Promise<Alumno[]> {
    return this.alumnoRepository.find();
  }

  async obtenerUno(idAlumno: number): Promise<Alumno> {
    const alumno = await this.alumnoRepository.findOne({where: { idAlumno }});
    if (!alumno) {
      throw new NotFoundException('Alumno no encontrado');
    }
    return alumno;
  }

  async actualizar(idAlumno: number, updateAlumnoDto: UpdateAlumnoDto): Promise<string> {
    await this.alumnoRepository.update(idAlumno, updateAlumnoDto);
    return 'Alumno actualizado';
  }

  async eliminar(idAlumno: number): Promise<string> {
    await this.alumnoRepository.delete(idAlumno);
    return 'Alumno eliminado';
  }

  // Querys

  async buscarPorNombre(nombre: string): Promise<Alumno[]> {
    return this.alumnoRepository.find({ where: { nombre } });
  }
  // http://localhost:5000/alumno/buscar/nombre?nombre=[columna - nombre]

  async buscarPorGrupo(grupo: string): Promise<Alumno[]> {
    return this.alumnoRepository.find({ where: { grupo } });
  }
  // http://localhost:5000/alumno/buscar/grupo?grupo=[columna - grupo]

  async buscarPorApellido(apellido1: string): Promise<Alumno[]> {
    return this.alumnoRepository.find({ where: { apellido1 } });
  }
  // http://localhost:5000/alumno/buscar/apellido?apellido1=[columna - apellido1]

  async buscarPorNif(nif: string): Promise<Alumno[]> {
    return this.alumnoRepository.find({ where: { nif } });
  }
  // http://localhost:5000/alumno/buscar/nif?nif=[columna - nif]

  async buscarPorId(idAlumno: number): Promise<Alumno> {
    return this.alumnoRepository.findOne({ where: { idAlumno } });
  }
  // http://localhost:5000/alumno/buscar/id?idAlumno=[columna - idAlumno]
}
