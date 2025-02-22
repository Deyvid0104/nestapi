import { Controller, Get, Post, Body, Param, Delete, Query, Put } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { Profesor } from './entities/profesor.entity';

@Controller('profesor')
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) {}

  @Post()
  async crear(@Body() crearProfesorDto: CreateProfesorDto): Promise<string> {
    return this.profesorService.crear(crearProfesorDto);
  }

  @Get()
  async obtenerTodos(): Promise<Profesor[]> {
    // Cambiado a Promise<Profesor[]> para mayor claridad
    return this.profesorService.obtenerTodos();
  }

  @Get(':id')
  async obtenerUno(@Param('id') id: string): Promise<Profesor> {
    // Cambiado a Promise<Profesor>
    return this.profesorService.obtenerUno(+id);
  }

  @Put(':id')
  async actualizar(
    @Param('id') id: string,
    @Body() actualizarProfesorDto: UpdateProfesorDto,
  ): Promise<string> {
    // Cambiado a Promise<Profesor>
    return this.profesorService.actualizar(+id, actualizarProfesorDto);
  }

  @Delete(':id')
  async eliminar(@Param('id') id: string): Promise<string> {
    return this.profesorService.eliminar(+id);
  }

  // Querys

  @Get('buscar/nombre')
  async buscarPorNombre(@Query('nombre') nombre: string): Promise<Profesor[]> {
    return this.profesorService.buscarPorNombre(nombre);
  }
  // http://localhost:5000/profesor/buscar/nombre?nombre=[columna - nombre]

  @Get('buscar/apellido')
  async buscarPorApellido(@Query('apellido') apellido: string,): Promise<Profesor[]> {
    return this.profesorService.buscarPorApellido(apellido);
  }
  // http://localhost:5000/profesor/buscar/apellido?apellido=[columna - apellido]

  @Get('buscar/nif')
  async buscarPorNif(@Query('nif') nif: string): Promise<Profesor[]> {
    return this.profesorService.buscarPorNif(nif);
  }
  // http://localhost:5000/profesor/buscar/nif?nif=[columna - nif]
}