import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Diseña } from './entities/diseña.entity';
import { UpdateDiseñaDto } from './dto/update-diseña.dto';
import { CreateDiseñaDto } from './dto/create-diseña.dto';
import { DiseñaService } from './diseña.service';

@Controller('diseña')
export class DiseñaController {
  constructor(private readonly diseñaService: DiseñaService) {}

  // Actualiza la relación entre profesor y práctica
  @Post()
  async crear(@Body() crearDiseñaDto: CreateDiseñaDto) {
    return this.diseñaService.crear(crearDiseñaDto);
  }
  // http://localhost:5000/diseña

  // Obtiene todas las relaciones entre profesor y práctica
  @Get()
  async obtenerTodos(): Promise<Diseña[]> {
    return this.diseñaService.obtenerTodos();
  }
  // http://localhost:5000/diseña

  @Get(':idProfesor/:idPractica')
  async obtenerUno(
    @Param('idProfesor') idProfesor: string,
    @Param('idPractica') idPractica: string,
  ): Promise<Diseña> {
    return this.diseñaService.obtenerUno(+idProfesor, +idPractica);
  }
  // http://localhost:5000/diseña/[columna - idProfesor]/[columna - idPractica]

  @Put(':idProfesor/:idPractica')
  async actualizar(
    @Param('idProfesor') idProfesor: string,
    @Param('idPractica') idPractica: string,
    @Body() updateDiseñaDto: UpdateDiseñaDto,
  ): Promise<string> { return this.diseñaService.actualizar(
      +idProfesor, +idPractica, updateDiseñaDto,
    );
  }
  // http://localhost:5000/diseña/[columna - idProfesor]/[columna - idPractica]

  @Delete(':idProfesor/:idPractica')
  async eliminar(
    @Param('idProfesor') idProfesor: string,
    @Param('idPractica') idPractica: string,
  ): Promise<string> {
    return this.diseñaService.eliminar(+idProfesor, +idPractica);
  }
  // http://localhost:5000/diseña/[columna - idProfesor]/[columna - idPractica]

  // Querys

  @Get('buscar/profesor/:id')
  async buscarPorProfesor(@Param('id') id: string): Promise<Diseña[]> {
    return this.diseñaService.buscarPorProfesor(+id);
  }
  // http://localhost:5000/diseña/buscar/profesor/[columna - id]

  @Get('buscar/practica/:id')
  async buscarPorPractica(@Param('id') id: string): Promise<Diseña[]> {
    return this.diseñaService.buscarPorPractica(+id);
  }
  // http://localhost:5000/diseña/buscar/practica/[columna - id]
}
