import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CourseService } from './course.service.js';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
  @Get()
  getAllCourses(){return this.courseService.getAllCourses();}
  @Get(':id')
  getCourseByID(@Param('id') id:string){return this.courseService.getCourseById(id);}
  @Post()
  createCourse(@Body() data:{name:string, code:string}):any {return this.courseService.createCourse(data.name, data.code);}



}
