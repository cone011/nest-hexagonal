import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/domain/entities/product.entity';

@Module({
  imports: [
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'test',
      port: 3306,
      username: 'test',
      password: 'test',
      database: 'testing',
      entities: [Product],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
