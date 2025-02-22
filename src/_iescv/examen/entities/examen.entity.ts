import { Hace } from 'src/_iescv/hace/entities/hace.entity';
import { Profesor } from 'src/_iescv/profesor/entities/profesor.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Examen {
  @PrimaryGeneratedColumn()
  idExamen: number;

  @Column()
  titulo: string;

  @Column()
  numPreguntas: number;

  @Column()
  fecha: string;

  @OneToMany(() => Hace, (hace) => hace.examen)
  alumnoHaceExamen: Hace[];

  @ManyToOne(() => Profesor, (profesor) => profesor.examen)
  profesor: Profesor;
}
