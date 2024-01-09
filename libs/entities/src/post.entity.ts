import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('posts')
export class PostEntity {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    title:string;

    @Column()
    message: string;

    @Column({name: 'author_id'}) //в DB принято в таком стиле
    authorId: string;

    @Column({name: 'is_published'})
    isPublished: boolean;

    @Column({name: 'created_at'})
    createdAt: string; // не date

    @Column({name: 'updated_at'})
    updateAt:string;
}