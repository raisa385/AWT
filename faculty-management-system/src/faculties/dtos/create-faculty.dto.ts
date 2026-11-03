import {Type} from 'class-transformer'
import{IsString, IsInt} from 'class-validator'

export class CreateFacultyDto{

    @IsString()
    id:string;

    @IsString()
    name:string;

    @IsString()
    expertise:string;

    @IsInt()
    @Type(()=>Number)
    noOfPublications:number;
}