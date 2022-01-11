import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Inject, Type } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Car, Clothing, Product } from './entities/product.entity';
import {
  UpdateCarInput,
  UpdateClothingInput,
} from './dto/update-product.input';
import {
  CreateCarInput,
  CreateClothingInput,
} from './dto/create-product.input';

export function BaseResolver<T extends Type<unknown>>(
  classRef: T,
  createInputType: any,
  updateInputType: any,
): any {
  @Resolver({ isAbstract: true })
  abstract class BaseResolverHost {
    abstract getService(): ProductsService<T>;

    @Query((type) => [Product], { name: 'findAll' })
    findAll(): Product[] {
      return this.getService().findAll();
    }
    @Query(() => classRef, { name: 'findOne' })
    findOne(@Args('id', { type: () => Int }) id: number) {
      return this.getService().findOne(id);
    }

    @Mutation((returns) => classRef, { name: `create${classRef.name}` })
    create(
      @Args({ name: classRef.name, type: () => createInputType })
      createProductInput: typeof createInputType,
    ): typeof classRef {
      return this.getService().createProduct(createProductInput);
    }

    @Mutation((returns) => classRef, { name: `update${classRef.name}` })
    update(
      @Args({ name: classRef.name, type: () => updateInputType })
      updateProductInput: typeof updateInputType,
    ) {
      return this.getService().update(
        updateProductInput.id,
        updateProductInput,
      );
    }
  }
  return BaseResolverHost;
}

@Resolver((of) => Car)
export class CarResolver extends BaseResolver(
  Car,
  CreateCarInput,
  UpdateCarInput,
) {
  constructor(
    @Inject(ProductsService) private recipesService: ProductsService<Car>,
  ) {
    super();
  }

  getService() {
    return this.recipesService;
  }
}

@Resolver((of) => Clothing)
export class ClothingResolver extends BaseResolver(
  Clothing,
  CreateClothingInput,
  UpdateClothingInput,
) {
  constructor(
    @Inject(ProductsService) private recipesService: ProductsService<Car>,
  ) {
    super();
  }

  getService() {
    return this.recipesService;
  }
}
