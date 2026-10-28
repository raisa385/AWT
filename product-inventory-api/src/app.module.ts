import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsModule } from './products/products.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Product } from './products/entities/product.entity.js';

@Module({
  imports: [ProductsModule, ConfigModule.forRoot({isGlobal:true,}), TypeOrmModule.forRootAsync({
    useFactory: ()=>({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities:[Product],
      synchronize: true,
    })
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
