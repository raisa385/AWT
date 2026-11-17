import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dtos/create-book.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookEntity } from './entities/create-book.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
    constructor(@InjectRepository(CreateBookEntity) private readonly booksRepo:Repository<CreateBookEntity>) {}

    async createBook(data:CreateBookDto):Promise<string|CreateBookEntity>{
        await this.booksRepo.create(data);
        const saved= await this.booksRepo.save(data);
        if(saved){return data;}
        else{throw new BadRequestException('Failed to save to db');}
    }
}
