import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateBookDto{
    @IsNumber()
    @IsNotEmpty()
    @Type(()=>Number)
    id:number;
    
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    author_name:string;

    @IsNumber()
    @IsPositive()
    @Type(()=>Number)
    pages:number;

}