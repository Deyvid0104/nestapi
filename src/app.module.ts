import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { CineModule } from './cine/cine.module';

import { PracticaModule } from './_iescv/practica/practica.module';
import { AlumnoModule } from './_iescv/alumno/alumno.module';
import { ProfesorModule } from './_iescv/profesor/profesor.module';
import { ExamenModule } from './_iescv/examen/examen.module';
import { RealizaModule } from './_iescv/realiza/realiza.module';
import { HaceModule } from './_iescv/hace/hace.module';
import { DiseñaModule } from './_iescv/diseña/diseña.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      name: 'base1',
      type: 'mysql',
      host: process.env.URL,
      port: 3306,
      username: process.env.USUARIO,
      password: process.env.PASSWORD,
      database: process.env.DBNAME,
      autoLoadEntities: true,
      // synchronize: false,
    }),
    TypeOrmModule.forRoot({
      name: 'base2',
      type: 'mysql',
      host: process.env.URL,
      port: 3306,
      username: process.env.USUARIO,
      password: process.env.PASSWORD,
      database: process.env.DBNAME2,
      autoLoadEntities: true,
      // synchronize: false,
    }),
    TypeOrmModule.forRoot({
      name: 'tarea',
      type: 'mysql',
      host: process.env.URL,
      port: 3306,
      username: process.env.USUARIO,
      password: process.env.PASSWORD,
      database: process.env.DB_TAREA,
      autoLoadEntities: true,
      synchronize: false,


    }),
    TypeOrmModule.forRoot({
      name: 'tareaProyecto',
      type: 'mysql',
      host: process.env.URL,
      port: 3306,
      username: process.env.USUARIO,
      password: process.env.PASSWORD,
      database: process.env.DB_TAREA2, // Cambiado a DB_TAREA2
      autoLoadEntities: true,
      synchronize: false,
    }),
    UsuarioModule,
    AlumnoModule,
    BibliotecaModule,
    PokemonModule,
    CineModule,
    PracticaModule,
    ProfesorModule,
    ExamenModule,
    RealizaModule,
    HaceModule,
    DiseñaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
