import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto.js';

@Injectable()
export class ProductsService {
    constructor (
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ){}

    public async createProduct(productData: CreateProductDto){
        const product = await  this.productRepository.findOne({
            where: {name:productData.name}
        })
        //if exists already
        if(product){return "product with given name already exists";}
        //else create new dto (not yet added to db)
        let newProduct =this.productRepository.create(productData)
        newProduct= await this.productRepository.save(newProduct) //async db write
        return newProduct;
    }
}

