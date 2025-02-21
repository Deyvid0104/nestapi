import { Categoria } from "src/_recambios/categoria/entities/categoria.entity";
import { Suministra } from "src/_recambios/suministra/entities/suministra.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pieza {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column()
  nombre: string;

  @Column()
  color: string;

  @Column('decimal', { precision: 7, scale: 2 })
  precio: number;

  @ManyToOne(() => Categoria, categoria => categoria.piezas)
  categoria: Categoria;

  @OneToMany(() => Suministra, psp => psp.pieza)
  proveedorSuministraPiezas: Suministra[];
}
