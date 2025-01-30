import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { CineService } from './cine.service';
import { CreateCineDto } from './dto/create-cine.dto';
import { UpdateCineDto } from './dto/update-cine.dto';
import { Cine } from './entities/cine.entity';

@Controller('cine')
export class CineController {
  constructor(private readonly cineService: CineService) {}

  @Post()
  async crear(@Body() crearCineDto: CreateCineDto): Promise<Cine> {
    return this.cineService.crear(crearCineDto);
  }

  @Get()
  async obtenerTodos(): Promise<Cine[]> {
    return this.cineService.obtenerTodos();
  }

  @Get(':id')
  async obtenerUno(@Param('id') id: string): Promise<Cine> {
    return this.cineService.obtenerUno(+id);
  }

  @Put(':id')
  async actualizar(@Param('id') id: string, @Body() actualizarCineDto: UpdateCineDto): Promise<string> {
    return this.cineService.actualizar(+id, actualizarCineDto);
  }

  @Delete(':id')
  async eliminar(@Param('id') id: string): Promise<string> {
    return this.cineService.eliminar(+id);
  }

  // Querys

  @Get('buscar/titulo')
  async buscarPorTitulo(@Query('titulo') titulo: string): Promise<Cine[]> {
    return this.cineService.buscarPorTitulo(titulo);
    // http://localhost:5000/cine/buscar/titulo?titulo=[columna - titulo]
  }

  @Get('buscar/director')
  async buscarPorDirector(@Query('director') director: string): Promise<Cine[]> {
    return this.cineService.buscarPorDirector(director);
    // http://localhost:5000/cine/buscar/director?director=[columna - director]
  }

  @Get('buscar/lanzamiento/mayor')
  async buscarPorAnioLanzamientoMayorQue(@Query('lanzamiento') lanzamiento: number): Promise<Cine[]> {
    return this.cineService.buscarPorAnioLanzamientoMayorQue(lanzamiento);
    // http://localhost:5000/cine/buscar/lanzamiento/menor?lanzamiento=[columna - lanzamiento]
  }

  @Get('buscar/lanzamiento/menor')
  async buscarPorAnioLanzamientoMenorQue(@Query('lanzamiento') lanzamiento: number): Promise<Cine[]> {
    return this.cineService.buscarPorAnioLanzamientoMenorQue(lanzamiento);
    // http://localhost:5000/cine/buscar/lanzamiento/menor?lanzamiento=[columna - lanzamiento]
  }

  @Get('buscar/duracion/mayor')
  async buscarPorDuracionMayorQue(@Query('duracion') duracion: number): Promise<Cine[]> {
    return this.cineService.buscarPorDuracionMayorQue(duracion);
    // http://localhost:5000/cine/buscar/duracion/mayor?duracion=[columna - duracion]
  }

  @Get('buscar/duracion/menor')
  async buscarPorDuracionMenorQue(@Query('duracion') duracion: number): Promise<Cine[]> {
    return this.cineService.buscarPorDuracionMenorQue(duracion);
    // http://localhost:5000/cine/buscar/duracion/menor?duracion=[columna - duracion]
  }

}