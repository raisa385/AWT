import { Module } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { BooksController } from './books.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateBookEntity } from './entities/create-book.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([CreateBookEntity])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
