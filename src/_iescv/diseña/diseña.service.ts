import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Diseña } from './entities/diseña.entity';
import { CreateDiseñaDto } from './dto/create-diseña.dto';
import { UpdateDiseñaDto } from './dto/update-diseña.dto';

@Injectable()
export class DiseñaService {
  constructor(
    @InjectRepository(Diseña, 'tareaProyecto')
    private diseñaRepository: Repository<Diseña>,
  ) {}

  async crear(createDiseñaDto: CreateDiseñaDto): Promise<string> {
    // Modificación para incluir relación profesorDiseñaPractica

    await this.diseñaRepository.save(createDiseñaDto);
    return 'Relación profesor-diseño creada';
  }

  async obtenerTodos(): Promise<Diseña[]> {
    return this.diseñaRepository.find({ relations: ['profesor', 'practica'] });
  }

  async obtenerUno(idProfesor: number, idPractica: number): Promise<Diseña> {
    // Modificación para incluir relación profesorDiseñaPractica

    const registro = await this.diseñaRepository.findOne({
      where: { idProfesor, idPractica },
      relations: ['profesor', 'practica'],
    });
    if (!registro) throw new NotFoundException('Registro no encontrado');
    return registro;
  }

  async actualizar(
    idProfesor: number,
    idPractica: number,
    updateDiseñaDto: UpdateDiseñaDto,
  ): Promise<string> {
    // Modificación para incluir relación profesorDiseñaPractica

    await this.diseñaRepository.update(
      { idProfesor, idPractica },
      updateDiseñaDto,
    );
    return 'Relación profesor-diseño actualizada';
  }

  async eliminar(idProfesor: number, idPractica: number): Promise<string> {
    // Modificación para incluir relación profesorDiseñaPractica

    await this.diseñaRepository.delete({ idProfesor, idPractica });
    return 'Relación profesor-diseño eliminada';
  }

  // Query

  async buscarPorProfesor(idProfesor: number): Promise<Diseña[]> {
    return this.diseñaRepository.find({ where: { idProfesor }, relations: ['practica'], });
  }
  // http://localhost:5000/diseña/buscar/profesor/[columna - id]

  async buscarPorPractica(idPractica: number): Promise<Diseña[]> {
    return this.diseñaRepository.find({ where: { idPractica }, relations: ['profesor'], });
  }
  // http://localhost:5000/diseña/buscar/practica/[columna - id]
}
