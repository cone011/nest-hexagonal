import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../domain/repositories/product.repository.interface';
import { Product } from '../domain/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/shared/dtos/pagination.dto';

@Injectable()
export class TypeOrmProductRepository implements ProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAllProduct(paginationDto: PaginationDto): Promise<Product[]> {
    const { limit, offset } = paginationDto;

    return await this.productRepository.find({
      skip: offset,
      take: limit,
    });
  }

  async findProductById(id: number): Promise<Product> {
    return await this.productRepository.findOne({
      where: { id },
    });
  }

  async saveProduct(product: Product): Promise<Product> {
    return await this.productRepository.save(product);
  }

  async updateProduct(id: number, product: Product): Promise<Product> {
    const productFound = await this.productRepository.findOneBy({ id });

    if (!productFound) {
      throw new NotFoundException('Product not found');
    }

    productFound.name = product.name;

    return await this.productRepository.save(productFound);
  }

  async deleteProduct(id: number): Promise<void> {
    const productFound = await this.productRepository.findOneBy({ id });

    if (!productFound) {
      throw new NotFoundException('Product not found');
    }

    await this.productRepository.remove(productFound);
  }
}
