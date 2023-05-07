import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity('compras')
export class Compra {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    nome: string

    @Column({nullable: false, type: "decimal", precision: 10, scale: 2,})
    preco: number

}