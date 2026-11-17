import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { FacultiesModule } from './faculties/faculties.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[FacultiesModule, TypeOrmModule.forRoot({
    type:'postgres',
    port:5432,
    host:'localhost',
    database:'FM_db',
    username:'postgres',
    password:'ch@ch@123',
    synchronize:true,
    autoLoadEntities:true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
