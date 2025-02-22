import { Module } from '@nestjs/common';
import { PracticaService } from './practica.service';
import { PracticaController } from './practica.controller';
import { Practica } from './entities/practica.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Practica], 'tareaProyecto')],
  controllers: [PracticaController],
  providers: [PracticaService],
})
export class PracticaModule {}
