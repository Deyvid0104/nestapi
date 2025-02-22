import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RealizaService } from './realiza.service';
import { CreateRealizaDto } from './dto/create-realiza.dto';
import { UpdateRealizaDto } from './dto/update-realiza.dto';

@Controller('realiza')
export class RealizaController {
  constructor(private readonly realizaService: RealizaService) {}

  @Post()
  create(@Body() createRealizaDto: CreateRealizaDto) {
    return this.realizaService.create(createRealizaDto);
  }

  @Get()
  findAll() {
    return this.realizaService.findAll();
  }

  @Get(':id')
  findOne(@Param('idAlumno') idAlumno: string, @Param('idPractica') idPractica: string) {
    return this.realizaService.findOne(+idAlumno, +idPractica);
  }
  // http://localhost:5000/realiza/1/1

  @Patch(':id')
  update(@Param('idAlumno') idAlumno: string, @Param('idPractica') idPractica: string, @Body() updateRealizaDto: UpdateRealizaDto) {
    return this.realizaService.update(+idAlumno, +idPractica, updateRealizaDto);
  }
  // http://localhost:5000/realiza/1/1

  @Delete(':id')
  remove(@Param('idAlumno') idAlumno: string, @Param('idPractica') idPractica: string) {
    return this.realizaService.remove(+idAlumno, +idPractica);
  }
  // http://localhost:5000/realiza/1/1

  // Query

  @Get('buscar/fecha')
  buscarPorFecha(@Param('fecha') fecha: string) {
    return this.realizaService.buscarPorFecha(fecha);
  }
  // http://localhost:5000/realiza/buscar/fecha?fecha=[columna - fecha]
}
