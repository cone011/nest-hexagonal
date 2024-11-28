import { Inject } from '@nestjs/common';
import { ProductRepository } from 'src/product/domain/repositories/product.repository.interface';
import { PaginationDto } from 'src/shared/dtos/pagination.dto';

export class DeleteProductService {
  constructor(
    @Inject('ProductRepositoryInterface')
    private readonly productRepository: ProductRepository,
  ) {}

  async execute(id: number) {
    return this.productRepository.deleteProduct(id);
  }
}
