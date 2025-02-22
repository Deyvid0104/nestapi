import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { PracticaService } from './practica.service';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';
import { Practica } from './entities/practica.entity';

@Controller('practica')
export class PracticaController {
  constructor(private readonly practicaService: PracticaService) {}
  
  @Post()
  async crear(@Body() crearPracticaDto: CreatePracticaDto): Promise<string> {
    return this.practicaService.crear(crearPracticaDto);
  }

  @Get()
  async obtenerTodos(): Promise<Practica[]> {
    return this.practicaService.obtenerTodos();
  }

  @Get(':id')
  async obtenerUno(@Param('id') id: string): Promise<Practica> {
    return this.practicaService.obtenerUno(+id);
  }

  @Put(':id')
  async actualizar(@Param('id') id: string, @Body() actualizarPracticaDto: UpdatePracticaDto): Promise<string> {
    return this.practicaService.actualizar(+id, actualizarPracticaDto);
  }

  @Delete(':id')
  async eliminar(@Param('id') id: string): Promise<string> {
    return this.practicaService.eliminar(+id);
  }

  // Querys

  @Get('buscar/titulo')
  async buscarPorTitulo(@Query('titulo') titulo: string): Promise<Practica[]> {
    return this.practicaService.buscarPorTitulo(titulo);
  }
  // http://localhost:5000/practica/buscar/titulo?titulo=[columna - titulo]

  @Get('buscar/dificultad')
  async buscarPorDificultad(@Query('dificultad') dificultad: string): Promise<Practica[]> {
    return this.practicaService.buscarPorDificultad(dificultad);
  }
  // http://localhost:5000/practica/buscar/dificultad?dificultad=[columna - dificultad]
}
