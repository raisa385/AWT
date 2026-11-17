import { BadRequestException, Injectable } from '@nestjs/common';
import { FacultiesEntity } from './entities/faculties.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacultyDto } from './dtos/create-faculty.dto.js';
import { updateFacultyDto } from './dtos/update-faculty.dto.js';

@Injectable()
export class FacultiesService {
    constructor(@InjectRepository(FacultiesEntity) private readonly facultiesRepo:Repository<FacultiesEntity>){}

    async createFaculty(data:CreateFacultyDto): Promise<FacultiesEntity>{
        try{
            const newFaculty = await this.facultiesRepo.create(data);
            return await this.facultiesRepo.save(newFaculty);
        }
        catch{throw new BadRequestException('Failed to add new Faculty')}
    }

    async getAllFaculties():Promise<FacultiesEntity[]>{
        return await this.facultiesRepo.find({
            select:{
                id:true,
                name:true,
                expertise:true,
                noOfPublications:true,
            },
            withDeleted:true,
        });
    }

    async getFacultyById(id:string):Promise<FacultiesEntity|string>{
        const faculty= await this.facultiesRepo.findOne({
            where:{
                id:id
            },
            select:{
                id:true,
                name:true,
                expertise:true,
            }
        });

        if(faculty!=null){return faculty} else {return 'faculty not found'}
    }

    async getFacultyByExpertise(expertise:string):Promise<FacultiesEntity[]|string>{
        const faculty= await this.facultiesRepo.find({
            where:{expertise:expertise},
            select:{
                id:true,
                name:true,
                expertise:true,
            }
        })

        if(faculty.length>0){return faculty}else{return 'No faculty available with that expertise'}
    }

    async deleteFacultyById(id:string):Promise<string>{
        const res = (await this.facultiesRepo.delete(id)).affected
        if(res!=null && res>0){
            return 'faculty deleted successfully'
        }
        else{ return ('faculty not found')}
    }

    async softDeleteFacultyById(id:string):Promise<string>{
        const res=(await this.facultiesRepo.softDelete(id)).affected
        if(res!=null && res>0){
            return 'faculty soft deleted successfully'
        }
        else{return 'faculty not found'}
    }

    async updateFaculty(id:string, data:updateFacultyDto):Promise<FacultiesEntity|string>{
        const faculty= await this.getFacultyById(id);
        if(faculty){
            const res = (await this.facultiesRepo.update(id,data)).affected;
            if(res!=null && res>0){
                const f =await this.getFacultyById(id);
                return `faculty with id ${f} updated`;
            }
            else{return 'faculty not found'}
        }
        else{
            throw new BadRequestException('faculty not found')
        }
    }
}
