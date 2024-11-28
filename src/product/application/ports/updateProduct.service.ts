import { Inject } from '@nestjs/common';
import { Product } from 'src/product/domain/entities/product.entity';
import { ProductRepository } from 'src/product/domain/repositories/product.repository.interface';
import { UpdateProductDto } from '../dtos/updateProduct.dto';

export class UpdateProductService {
  constructor(
    @Inject('ProductRepositoryInterface')
    private readonly productRepository: ProductRepository,
  ) {}

  async execute(id: number, product: UpdateProductDto) {
    const productUpdate = new Product();

    productUpdate.name = product.name;

    return this.productRepository.updateProduct(id, productUpdate);
  }
}
