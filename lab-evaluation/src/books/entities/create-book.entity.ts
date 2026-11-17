import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('books')
export class CreateBookEntity{
    @PrimaryColumn({unique:true, type:'integer', nullable:false})
    id:number;

    @Column({type:'varchar',nullable:false})
    name:string;
    
    @Column({type:'varchar',nullable:false})
    author_name:string;

    @Column({type:'integer',nullable:false})
    pages:number;
}