import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Query,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateProductDto } from 'src/product/application/dtos/createProduct.dto';
import { UpdateProductDto } from 'src/product/application/dtos/updateProduct.dto';
import { CreateProductService } from 'src/product/application/ports/createProduct.service';
import { FindAllProductService } from 'src/product/application/ports/findAllProduct.service';
import { FindProductByIdService } from 'src/product/application/ports/findProductById.service';
import { UpdateProductService } from 'src/product/application/ports/updateProduct.service';
import { DeleteProductService } from 'src/product/application/ports/deleteProduct.service';

import { PaginationDto } from 'src/shared/dtos/pagination.dto';

@Controller('product')
export class ProductController {
  constructor(
    private readonly createProductService: CreateProductService,
    private readonly findAllProductService: FindAllProductService,
    private readonly findProductByIdService: FindProductByIdService,
    private readonly updateProductService: UpdateProductService,
    private readonly deleteProductService: DeleteProductService,
  ) {}

  @Get()
  async findAllProducts(@Query() paginationDto: PaginationDto) {
    return this.findAllProductService.execute(paginationDto);
  }

  @Get(':id')
  async findProductByid(@Param() id: number) {
    return this.findProductByIdService.execute(id);
  }

  @Post()
  async create(@Body() product: CreateProductDto) {
    return this.createProductService.execute(product);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.updateProductService.execute(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.deleteProductService.execute(id);
  }
}
