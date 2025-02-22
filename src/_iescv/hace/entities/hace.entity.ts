import { Examen } from 'src/_iescv/examen/entities/examen.entity';
import { Alumno } from 'src/_iescv/alumno/entities/alumno.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Hace {
  @PrimaryColumn()
  idAlumno: number;

  @PrimaryColumn()
  idExamen: number;

  @Column()
  nota: number;

  @ManyToOne(() => Alumno, (alumno) => alumno.alumnoHaceExamen)
  @JoinColumn({ name: 'idAlumno' })
  alumno: Alumno;

  @ManyToOne(() => Examen, (examen) => examen.alumnoHaceExamen)
  @JoinColumn({ name: 'idExamen' })
  examen: Examen;
}
