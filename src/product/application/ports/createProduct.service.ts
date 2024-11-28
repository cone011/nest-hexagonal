import { Injectable, Inject } from '@nestjs/common';
import { ProductRepository } from 'src/product/domain/repositories/product.repository.interface';
import { CreateProductDto } from '../dtos/createProduct.dto';
import { Product } from 'src/product/domain/entities/product.entity';

@Injectable()
export class CreateProductService {
  constructor(
    @Inject('ProductRepositoryInterface')
    private readonly productRepository: ProductRepository,
  ) {}

  async execute(createProductDto: CreateProductDto): Promise<Product> {
    const { name } = createProductDto;

    const product = new Product();

    product.name = name;

    return this.productRepository.saveProduct(product);
  }
}
