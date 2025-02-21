import { Module } from '@nestjs/common';
import { SuministraService } from './suministra.service';
import { SuministraController } from './suministra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Suministra } from './entities/suministra.entity';
import { Proveedor } from '../proveedor/entities/proveedor.entity';
import { Pieza } from '../pieza/entities/pieza.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Suministra],"base1")],
  controllers: [SuministraController],
  providers: [SuministraService],
})
export class SuministraModule {}
