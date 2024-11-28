import { PaginationDto } from 'src/shared/dtos/pagination.dto';
import { Product } from '../entities/product.entity';

export interface ProductRepository {
  findAllProduct(paginationDto: PaginationDto): Promise<Product[]>;
  findProductById(id: number): Promise<Product>;
  saveProduct(product: Product): Promise<Product>;
  updateProduct(id: number, product: Product): Promise<Product>;
  deleteProduct(id: number): Promise<void>;
}
