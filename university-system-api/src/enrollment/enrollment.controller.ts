import { Controller,Get, Post, Param, Body } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service.js';

@Controller('enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Get()
  getEnrollments():any{return this.enrollmentService.getEnrollments()}

  @Post()
  enrollStudent(@Body() data: {studentName:string, courseId:string}):any{ 
    return this.enrollmentService.enrollStudent(data.studentName,data.courseId)
  }
}
