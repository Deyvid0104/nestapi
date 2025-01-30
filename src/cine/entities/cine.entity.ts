import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cine')
export class Cine {
    @PrimaryGeneratedColumn() // Genera un id autoincremental, si sólo fuera clave sería @PrimaryColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    director: string;

    @Column()
    lanzamiento: number;

    @Column()
    duracion: number;
}
