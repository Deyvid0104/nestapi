import { Diseña } from 'src/_iescv/diseña/entities/diseña.entity';
import { Examen } from 'src/_iescv/examen/entities/examen.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profesor {
  @PrimaryGeneratedColumn()
  idProfesor: number;

  @Column()
  nif: string;

  @Column()
  nombre: string;

  @Column()
  apellido1: string;

  @Column()
  apellido2: string;

  @OneToMany(() => Diseña, (diseña) => diseña.profesor)
  profesorDiseñaPracticas: Diseña[];

  @OneToMany(() => Examen, examen => examen.profesor)
  examen: Examen[];
}
