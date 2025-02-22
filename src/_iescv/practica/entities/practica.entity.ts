import { Diseña } from 'src/_iescv/diseña/entities/diseña.entity';
import { Realiza } from 'src/_iescv/realiza/entities/realiza.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Practica {
  @PrimaryGeneratedColumn()
  idPractica: number;

  @Column()
  titulo: string;

  @Column()
  dificultad: string;

  @OneToMany(() => Diseña, (diseña) => diseña.practica)
  profesorDiseñaPracticas: Diseña[];

  @OneToMany(() => Realiza, (realiza) => realiza.practica)
  alumnoRealizaPractica: Realiza[];
}
