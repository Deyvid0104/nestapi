import { Controller, Get, Post, Body, Param, Delete, Put, Query, NotFoundException } from '@nestjs/common';
import { AlumnoService } from './alumno.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { Alumno } from './entities/alumno.entity';

@Controller('alumno')
export class AlumnoController {
  constructor(private readonly alumnoService: AlumnoService) {}

  @Post()
  async crear(@Body() crearAlumnoDto: CreateAlumnoDto): Promise<string> {
    return this.alumnoService.crear(crearAlumnoDto);
  }

  @Get()
  async obtenerTodos(): Promise<Alumno[]> {
    return this.alumnoService.obtenerTodos();
  }

  @Get(':id')
  async obtenerUno(@Param('id') id: string): Promise<Alumno> {
    return this.alumnoService.obtenerUno(+id);
  }

  @Put(':id')
  async actualizar(@Param('id') id: string, @Body() actualizarAlumnoDto: UpdateAlumnoDto): Promise<string> {
    return this.alumnoService.actualizar(+id, actualizarAlumnoDto);
  }

  @Delete(':id')
  async eliminar(@Param('id') id: string): Promise<string> {
    return this.alumnoService.eliminar(+id);
  }

  // Querys

  @Get('buscar/nombre')
  async buscarPorNombre(@Query('nombre') nombre: string): Promise<Alumno[]> {
    return this.alumnoService.buscarPorNombre(nombre);
  }
  // http://localhost:5000/alumno/buscar/nombre?nombre=[columna - nombre]

  @Get('buscar/grupo')
  async buscarPorGrupo(@Query('grupo') grupo: string): Promise<Alumno[]> {
    return this.alumnoService.buscarPorGrupo(grupo);
  }
  // http://localhost:5000/alumno/buscar/grupo?grupo=[columna - grupo]

  @Get('buscar/apellido')
  async buscarPorApellido(@Query('apellido1') apellido1: string): Promise<Alumno[]> {
    return this.alumnoService.buscarPorApellido(apellido1);
  }
  // http://localhost:5000/alumno/buscar/apellido?apellido1=[columna - apellido1]

  @Get('buscar/nif')
  async buscarPorNif(@Query('nif') nif: string): Promise<Alumno[]> {
    return this.alumnoService.buscarPorNif(nif);
  }
  // http://localhost:5000/alumno/buscar/nif?nif=[columna - nif]

  @Get('buscar/id')
  async buscarPorId(@Query('idAlumno') idAlumno: number): Promise<Alumno> {
    return this.alumnoService.buscarPorId(idAlumno);
  }
  // http://localhost:5000/alumno/buscar/id?idAlumno=[columna - idAlumno]
}