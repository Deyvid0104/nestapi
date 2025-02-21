import { Module } from '@nestjs/common';
import { PiezaService } from './pieza.service';
import { PiezaController } from './pieza.controller';
import { Pieza } from './entities/pieza.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Pieza],"base1")],
  controllers: [PiezaController],
  providers: [PiezaService],
})
export class PiezaModule {}
