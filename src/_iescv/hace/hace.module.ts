import { Module } from '@nestjs/common';
import { HaceService } from './hace.service';
import { HaceController } from './hace.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hace } from './entities/hace.entity';
import { Alumno } from '../alumno/entities/alumno.entity';
import { Examen } from '../examen/entities/examen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hace,Alumno,Examen], 'tareaProyecto')],
  controllers: [HaceController],
  providers: [HaceService],
})
export class HaceModule {}
