import { Practica } from 'src/_iescv/practica/entities/practica.entity';
import { Alumno } from 'src/_iescv/alumno/entities/alumno.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity() 
export class Realiza {
  @PrimaryColumn()
  idAlumno: number;

  @PrimaryColumn()
  idPractica: number;

  @Column()
  fecha: string;

  @Column('decimal', { precision: 2, scale: 2 })
  nota: number;

  @ManyToOne(() => Alumno, (alumno) => alumno.alumnoRealizaPractica)
  @JoinColumn({ name: 'idAlumno' })
  alumno: Alumno;

  @ManyToOne(() => Practica, (practica) => practica.alumnoRealizaPractica)
  @JoinColumn({ name: 'idPractica' })
  practica: Practica;
}
