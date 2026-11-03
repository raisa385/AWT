import { BadRequestException, Injectable } from '@nestjs/common';
import { FacultiesEntity } from './entities/faculties.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacultyDto } from './dtos/create-faculty.dto.js';

@Injectable()
export class FacultiesService {
    constructor(@InjectRepository(FacultiesEntity) private readonly facultiesRepo:Repository<FacultiesEntity>){}

    async createFaculty(data:CreateFacultyDto): Promise<CreateFacultyDto>{
        try{
            const newFaculty = await this.facultiesRepo.create(data);
            return await this.facultiesRepo.save(newFaculty);
        }
        catch{throw new BadRequestException('Failed to add new Faculty')}
    }
}
