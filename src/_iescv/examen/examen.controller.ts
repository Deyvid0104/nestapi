import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { ExamenService } from './examen.service';
import { CreateExamenDto } from './dto/create-examen.dto';
import { UpdateExamenDto } from './dto/update-examen.dto';
import { Examen } from './entities/examen.entity';

@Controller('examen')
export class ExamenController {
  constructor(private readonly examenService: ExamenService) {}

  @Post()
  async crear(@Body() crearExamenDto: CreateExamenDto): Promise<string> {
    return this.examenService.crear(crearExamenDto);
  }

  @Get()
  async obtenerTodos(): Promise<Examen[]> {
    return this.examenService.obtenerTodos();
  }

  @Get(':id')
  async obtenerUno(@Param('id') id: string): Promise<Examen> {
    return this.examenService.obtenerUno(+id);
  }

  @Put(':id')
  async actualizar(@Param('id') id: string, @Body() actualizarExamenDto: UpdateExamenDto): Promise<string> {
    return this.examenService.actualizar(+id, actualizarExamenDto);
  }

  @Delete(':id')
  async eliminar(@Param('id') id: string): Promise<string> {
    return this.examenService.eliminar(+id);
  }

  // Querys

  @Get('buscar/titulo')
  async buscarPorTitulo(@Query('titulo') titulo: string): Promise<Examen[]> {
    return this.examenService.buscarPorTitulo(titulo);
  }
  // http://localhost:5000/examen/buscar/titulo?titulo=[columna - titulo]

  @Get('buscar/numPreguntas')
  async buscarPorNumPreguntas(@Query('numPreguntas') numPreguntas: number): Promise<Examen[]> {
    return this.examenService.buscarPorNumPreguntas(numPreguntas);
  }
  // http://localhost:5000/examen/buscar/numPreguntas?numPreguntas=[columna - numPreguntas]

  @Get('buscar/fecha')
  async buscarPorFecha(@Query('fecha') fecha: string): Promise<Examen[]> {
    return this.examenService.buscarPorFecha(fecha);
  }
  // http://localhost:5000/examen/buscar/fecha?fecha=[columna - fecha]
}