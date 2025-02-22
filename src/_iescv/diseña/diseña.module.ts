import { Module } from '@nestjs/common';
import { DiseñaService } from './diseña.service';
import { DiseñaController } from './diseña.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diseña } from './entities/diseña.entity';
import { Practica } from '../practica/entities/practica.entity';
import { Profesor } from '../profesor/entities/profesor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Diseña,Practica,Profesor], 'tareaProyecto')],
  controllers: [DiseñaController],
  providers: [DiseñaService],
})
export class DiseñaModule {}
