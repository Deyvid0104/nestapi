import { Suministra } from "src/_recambios/suministra/entities/suministra.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Proveedor {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column()
  direccion: string;

  @Column()
  ciudad: string;

  @Column()
  provincia: string;

  @OneToMany(() => Suministra, psp => psp.proveedor)
  proveedorSuministraPiezas: Suministra[];
}
