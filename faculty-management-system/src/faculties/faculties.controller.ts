import { Body, Controller, Post,Get, Param, Patch, Delete, UseInterceptors, UploadedFile, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, Query, Res } from '@nestjs/common';
import { FacultiesService } from './faculties.service.js';
import { CreateFacultyDto } from './dtos/create-faculty.dto.js';
import { updateFacultyDto } from './dtos/update-faculty.dto.js';
import { FacultiesEntity } from './entities/faculties.entity.js';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import * as fs from 'fs/promises';
import type { Response as Response} from 'express';


@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}
  
  @Post('createFaculty')
  async createFaculty(@Body() data:CreateFacultyDto):Promise<FacultiesEntity>{
    return await this.facultiesService.createFaculty(data);
  }

  @Get('getAllFaculties')
  async getAllFaculties():Promise<FacultiesEntity[]>{
    return await this.facultiesService.getAllFaculties();
  }

  @Get('findFaculty')
  async findFacultyByExpertise(@Query('expertise') expertise:string):Promise<FacultiesEntity[]|string>{
    return await this.facultiesService.getFacultyByExpertise(expertise);
  }

  @Get('getFacultyById/:id')
  async getFacultyById(@Param('id') id:string):Promise<FacultiesEntity|string>{
    return await this.facultiesService.getFacultyById(id);
  }

  @Patch('updateFaculty/:id')
  async updateFaculty(@Param('id') id:string, @Body() data: updateFacultyDto):Promise<FacultiesEntity|string>{
    return await this.facultiesService.updateFaculty(id,data);
  }

  @Delete('deleteFaculty/:id')
  async deleteFaculty(@Param('id') id:string):Promise<string|FacultiesEntity>{
    return await this.facultiesService.deleteFacultyById(id);
  }

  @Delete('softDeleteFaculty/:id')
  async softDeleteFaculty(@Param('id') id:string):Promise<string|FacultiesEntity>{
    return await this.facultiesService.softDeleteFacultyById(id);
  }

  @Post('uploadFile')
  @UseInterceptors(
    FileInterceptor('file',{storage: memoryStorage()}),
  )

  async uploadFile(
    @UploadedFile(
       new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 1024 * 1024 * 2,
          }),

          new FileTypeValidator({
            fileType: /^(text\/plain|application\/pdf)$/,
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ){
    const name = Date.now() + file.originalname;
    const destination = './uploads';
    const finalDestination = `${destination}/${name}`;
    await fs.writeFile(finalDestination, file.buffer);
    console.log(file.originalname);
    console.log(file.size);
    console.log(file.mimetype);
  }

@Get('download/download/:fileName')
downloadFile(@Param('fileName') fileName: string, @Res() res: Response){
res.sendFile(fileName, { root: './uploads' });
}
}
