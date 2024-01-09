import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('tokens')
export class Token {
    @PrimaryColumn('uuid')
    id:string;

    @Column()
    email: string;
}