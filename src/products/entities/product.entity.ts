import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int, { name: 'id' })
  id: number;

  @Field()
  category: string;

  @Field({ name: 'description' })
  description: string;

  @Field({ name: 'brand' })
  brand: string;
}

@ObjectType()
export class Car extends Product {
  @Field()
  model?: string;

  @Field(() => Int)
  year?: number;
}

@ObjectType()
export class Clothing extends Product {
  @Field({ name: 'collection' })
  collection?: string;

  @Field(() => Int, { defaultValue: 0, name: 'size' })
  size?: number;
}
