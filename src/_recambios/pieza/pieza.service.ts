import { Injectable } from '@nestjs/common';
import { CreatePiezaDto } from './dto/create-pieza.dto';
import { UpdatePiezaDto } from './dto/update-pieza.dto';
import { Pieza } from './entities/pieza.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PiezaService {
  constructor(
    @InjectRepository(Pieza,'base1')
    private piezaRepository: Repository<Pieza>,
  ) {}
  create(createPiezaDto: CreatePiezaDto) {
    return this.piezaRepository.save(createPiezaDto);
  }
  findAll() {
    return this.piezaRepository.find({ relations: ['categoria'] });
  }
  findOne(id: number) {
    return this.piezaRepository.findOne({ where: { codigo: id }, relations: ['categoria'] });
  }
  update(id: number, updatePiezaDto: UpdatePiezaDto) {
    return this.piezaRepository.update(id, updatePiezaDto);
  }
  remove(id: number) {
    return this.piezaRepository.delete(id);
  }
}