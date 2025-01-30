import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('pokemon')
export class Pokemon {
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    HP: number;

    @Column()
    ataque: number;

    @Column()
    defensa: number;

    @Column()
    img: string;
}
