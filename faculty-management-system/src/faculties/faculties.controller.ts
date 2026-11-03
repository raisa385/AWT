import { Body, Controller } from '@nestjs/common';
import { FacultiesService } from './faculties.service.js';
import { CreateFacultyDto } from './dtos/create-faculty.dto.js';

@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  // @Post('create-faculty')
  // async createFaculty(@Body() data:CreateFacultyDto):Promise<CreateFacultyDto>{
  //   return await this.facultiesService.createFaculty(data);
  // }
}
