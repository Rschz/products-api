import { Injectable } from '@nestjs/common';

import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService<T> {
  products: any[] = [
    {
      id: 1,
      category: 'automotive',
      brand: 'Mazda',
    },
    {
      id: 2,
      category: 'clothing',
      brand: 'Zara',
    },
  ];

  createProduct(createProductInput: T) {
    let { id } = this.products.reduce((max, obj) => {
      return obj.id > max.id ? obj : max;
    });

    createProductInput['id'] = id + 1;

    this.products.push(createProductInput);
    return createProductInput;
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): any {
    return this.products.find((prod) => prod.id === id);
  }

  update(id: number, updateProductInput: T) {
    const itemIndex = this.products.findIndex((prod) => prod.id === id);
    this.products[itemIndex] = updateProductInput;

    return this.products[itemIndex];
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
