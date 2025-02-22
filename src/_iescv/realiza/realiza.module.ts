import { Module } from '@nestjs/common';
import { RealizaService } from './realiza.service';
import { RealizaController } from './realiza.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Realiza } from './entities/realiza.entity';
import { Practica } from '../practica/entities/practica.entity';
import { Alumno } from '../alumno/entities/alumno.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Realiza,Practica,Alumno], 'tareaProyecto')],
  controllers: [RealizaController],
  providers: [RealizaService],
})
export class RealizaModule {}
