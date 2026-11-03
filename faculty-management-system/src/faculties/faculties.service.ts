import { Injectable } from '@nestjs/common';
import { FacultiesEntity } from './entities/faculties.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacultyDto } from './dtos/create-faculty.dto.js';

@Injectable()
export class FacultiesService {
    constructor(@InjectRepository(FacultiesEntity) private readonly facultiesRepo:Repository<FacultiesEntity>){}

    // async createFaculty(data:CreateFacultyDto): Promise<CreateFacultyDto>{
    //     try{
    //         const 
    //     }
    // }
}
