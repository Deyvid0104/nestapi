import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { AlumnoModule } from './alumno/alumno.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { CineModule } from './cine/cine.module';
import { ProveedorModule } from './_recambios/proveedor/proveedor.module';
import { SuministraModule } from './_recambios/suministra/suministra.module';
import { PiezaModule } from './_recambios/pieza/pieza.module';
import { CategoriaModule } from './_recambios/categoria/categoria.module';

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
      synchronize: true,
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
      synchronize: true,
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
      synchronize: true,
    }),
    TypeOrmModule.forRoot({
      name: 'tareaProyecto',
      type: 'mysql',
      host: process.env.URL,
      port: 3306,
      username: process.env.USUARIO,
      password: process.env.PASSWORD,
      database: process.env.DB_TAREA,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsuarioModule,
    AlumnoModule,
    BibliotecaModule,
    PokemonModule,
    CineModule,
    ProveedorModule,
    SuministraModule,
    PiezaModule,
    CategoriaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
