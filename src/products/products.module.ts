import { Module } from '@nestjs/common';
import { CarResolver, ClothingResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  providers: [CarResolver, ClothingResolver, ProductsService],
})
export class ProductsModule {}
