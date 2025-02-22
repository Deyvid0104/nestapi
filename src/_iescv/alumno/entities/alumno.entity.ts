import { Hace } from 'src/_iescv/hace/entities/hace.entity';
import { Realiza } from 'src/_iescv/realiza/entities/realiza.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Alumno {
  @PrimaryGeneratedColumn()
  idAlumno: number;

  @Column()
  nif: string;

  @Column()
  grupo: string;

  @Column()
  nombre: string;

  @Column()
  apellido1: string;

  @Column()
  apellido2: string;

  @OneToMany(() => Realiza, (realiza) => realiza.alumno)
  alumnoRealizaPractica: Realiza[];

  @OneToMany(() => Hace, (hace) => hace.alumno)
  alumnoHaceExamen: Hace[];
}
