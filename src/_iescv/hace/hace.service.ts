import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHaceDto } from './dto/create-hace.dto';
import { UpdateHaceDto } from './dto/update-hace.dto';
import { Hace } from './entities/hace.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HaceService {

  constructor(
    @InjectRepository(Hace, 'tareaProyecto')
    private haceRepository: Repository<Hace>,
  ) {}

  async create(createHaceDto: CreateHaceDto): Promise<string> {
    await this.haceRepository.save(createHaceDto);
    return 'Registro de examen realizado creado';
  }

  async findAll(): Promise<Hace[]> {
    return this.haceRepository.find({ relations: ['alumno', 'examen'] });
  }

  async findOne(idAlumno: number, idExamen: number): Promise<Hace> {
    const registro = await this.haceRepository.findOne({
      where: { idAlumno, idExamen },
      relations: ['alumno', 'examen']
    });
    if (!registro) throw new NotFoundException('Registro no encontrado');
    return registro;
  }

  async update(idAlumno: number, idExamen: number, updateHaceDto: UpdateHaceDto): Promise<string> {
    await this.haceRepository.update({ idAlumno, idExamen }, updateHaceDto);
    return 'Registro de examen actualizado';
  }

  async remove(idAlumno: number, idExamen: number): Promise<string> {
    await this.haceRepository.delete({ idAlumno, idExamen });
    return 'Registro de examen eliminado';
  }

  // Query

  async buscarNota(nota: number): Promise<Hace[]> {
    return this.haceRepository.find({
      where: { nota }, relations: ['alumno', 'examen'] });
  }
  // http://localhost:5000/hace/buscar/nota?nota=[columna - nota]
}