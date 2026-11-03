import { Module } from '@nestjs/common';
import { FacultiesService } from './faculties.service.js';
import { FacultiesController } from './faculties.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultiesEntity } from './entities/faculties.entity.js';

@Module({
  controllers: [FacultiesController],
  providers: [FacultiesService],
  imports:[TypeOrmModule.forFeature([FacultiesEntity])]
})
export class FacultiesModule {}
