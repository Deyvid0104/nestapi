import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CineService } from './cine.service';
import { CineController } from './cine.controller';
import { Cine } from './entities/cine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cine],"tarea")],
  controllers: [CineController],
  providers: [CineService],
})
export class CineModule {}
