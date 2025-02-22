import { Practica } from 'src/_iescv/practica/entities/practica.entity';
import { Profesor } from 'src/_iescv/profesor/entities/profesor.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Diseña {
  @PrimaryColumn()
  idProfesor: number;

  @PrimaryColumn()
  idPractica: number;

  @Column()
  fecha: string;

  @ManyToOne(() => Practica, (practica) => practica.profesorDiseñaPracticas)
  @JoinColumn({ name: 'idPractica' })
  practica: Practica;

  @ManyToOne(() => Profesor, (profesor) => profesor.profesorDiseñaPracticas)
  @JoinColumn({ name: 'idProfesor' })
  profesor: Profesor;
}
