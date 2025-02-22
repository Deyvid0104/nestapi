import { Controller, Get, Body, Param, Put, Query, Post } from '@nestjs/common';
import { HaceService } from './hace.service';
import { UpdateHaceDto } from './dto/update-hace.dto';
import { CreateHaceDto } from './dto/create-hace.dto';

@Controller('hace')
export class HaceController {
  constructor(
    private readonly haceService: HaceService
  ) {}

  // @Post()
  // create(@Body() createHaceDto: CreateHaceDto.create) {
  //   return this.haceService.create(createHaceDto,);
  // }

  // @Get()
  // findAll() {
  //   return this.haceService.findAll();
  // }

  // @Get(':idAlumno/:idExamen')
  // findOne(
  //   @Param('idAlumno') idAlumno: string, 
  //   @Param('idExamen') idExamen: string) {
  //   return this.haceService.findOne(+idAlumno, +idExamen);
  // }

  @Get(':idAlumno/:idExamen')
  async findOne( @Param('idAlumno') idAlumno: string, @Param('idExamen') idExamen: string, ) {
    return this.haceService.findOne(+idAlumno, +idExamen);
  }

  @Put(':idAlumno/:idExamen')
  async update( @Param('idAlumno') idAlumno: string, @Param('idExamen') idExamen: string, @Body() 
    updateHaceDto: UpdateHaceDto,
  ) {
    return this.haceService.update(+idAlumno, +idExamen, updateHaceDto);
  }

  // Query

  @Get('buscar/nota')
  async buscarNota(@Query('nota') nota: number) {
    return this.haceService.buscarNota(nota);
  }
  // http://localhost:5000/hace/buscar/nota?nota=[columna - nota]
}
