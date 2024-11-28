import { Module } from '@nestjs/common';
import { Product } from './domain/entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './infrastructure/controllers/product.controller';
import { TypeOrmProductRepository } from './infrastructure/typeorm-product.repository';
import { CreateProductService } from './application/ports/createProduct.service';
import { FindAllProductService } from './application/ports/findAllProduct.service';
import { FindProductByIdService } from './application/ports/findProductById.service';
import { UpdateProductService } from './application/ports/updateProduct.service';
import { DeleteProductService } from './application/ports/deleteProduct.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [
    CreateProductService,
    FindAllProductService,
    FindProductByIdService,
    UpdateProductService,
    DeleteProductService,
    {
      provide: 'ProductRepositoryInterface',
      useClass: TypeOrmProductRepository,
    },
  ],
  exports: [CreateProductService],
})
export class ProductModule {}
