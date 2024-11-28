import { Inject } from '@nestjs/common';
import { ProductRepository } from 'src/product/domain/repositories/product.repository.interface';
import { PaginationDto } from 'src/shared/dtos/pagination.dto';

export class FindAllProductService {
  constructor(
    @Inject('ProductRepositoryInterface')
    private readonly productRepository: ProductRepository,
  ) {}

  async execute(paginationDto: PaginationDto) {
    return this.productRepository.findAllProduct(paginationDto);
  }
}
