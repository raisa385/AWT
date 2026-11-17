import { Body, Controller, Post } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dtos/create-book.dto.js';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('postbooks')
  async createBook(@Body() data:CreateBookDto){
    return await this.booksService.createBook(data);
  }
}
