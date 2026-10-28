import {Type} from 'class-transformer'
import {IsString, IsNotEmpty, IsOptional, IsPositive, IsInt, Min, IsBoolean, IsNumber} from 'class-validator'

export class CreateProductDto{
    //name, description, price, stock, category, isActive
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsOptional()
    description?:string;

    @IsNumber()
    @IsPositive()
    @Type(()=>Number)
    price:number;

    @IsInt()
    @Min(0)
    @IsOptional()
    @Type(()=>Number)
    stock?:number;

    @IsString()
    @IsNotEmpty()
    category:string;

    @IsBoolean()
    @IsOptional()
    isActive?:boolean;
}