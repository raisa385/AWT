import { Entity, PrimaryColumn, Column } from "typeorm";


@Entity('faculties')
export class FacultiesEntity{

    @PrimaryColumn({name:'Id',type:'varchar',unique:true})
    id:string;

    @Column({name:'Name', type:'varchar', length:30})
    name:string;

    @Column({name:'Expertise', type:'varchar', length:30})
    expertise:string;

    @Column({name:'NoOfPublications', type:'integer'})
    noOfPublications:number;
}