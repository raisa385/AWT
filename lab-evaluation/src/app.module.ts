import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BooksModule } from './books/books.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [BooksModule, TypeOrmModule.forRoot({
    host:'localhost',
    type:'postgres',
    database:'book_db',
    username:'postgres',
    password:'ch@ch@123',
    synchronize:true,
    autoLoadEntities:true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
