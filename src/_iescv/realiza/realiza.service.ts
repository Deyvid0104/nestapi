import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Realiza } from "./entities/realiza.entity";
import { CreateRealizaDto } from "./dto/create-realiza.dto";
import { UpdateRealizaDto } from "./dto/update-realiza.dto";

@Injectable()
export class RealizaService {
  constructor(
    @InjectRepository(Realiza, 'tareaProyecto')
    private realizaRepository: Repository<Realiza>,
  ) {}

  async create(createRealizaDto: CreateRealizaDto): Promise<string> {
    await this.realizaRepository.save(createRealizaDto);
    return 'Práctica realizada registrada';
  }

  async findAll(): Promise<Realiza[]> {
    return this.realizaRepository.find({ relations: ['alumno', 'practica'] });
  }

  async findOne(idAlumno: number, idPractica: number): Promise<Realiza> {
    const registro = await this.realizaRepository.findOne({
      where: { idAlumno, idPractica },
      relations: ['alumno', 'practica']
    });
    if (!registro) throw new NotFoundException('Registro no encontrado');
    return registro;
  }

  async update(idAlumno: number, idPractica: number, updateRealizaDto: UpdateRealizaDto): Promise<string> {
    await this.realizaRepository.update({ idAlumno, idPractica }, updateRealizaDto);
    return 'Registro actualizado';
  }

  async remove(idAlumno: number, idPractica: number): Promise<string> {
    await this.realizaRepository.delete({ idAlumno, idPractica });
    return 'Registro eliminado';
  }

  // Query

  async buscarPorFecha(fecha: string): Promise<Realiza[]> {
    return this.realizaRepository.find({
      where: { fecha }, relations: ['alumno', 'practica'] });
  }
  // http://localhost:5000/realiza/buscar/fecha?fecha=[columna - fecha]
}