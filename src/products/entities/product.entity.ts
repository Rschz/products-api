import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field()
  category: string;

  @Field({ nullable: true })
  brand?: string;
}

@ObjectType()
export class Car extends Product {
  @Field({ nullable: true })
  model?: string;

  @Field(() => Int, { nullable: true })
  year?: number;
}

@ObjectType()
export class Clothing extends Product {
  @Field({ nullable: true })
  collection?: string;

  @Field(() => Int, { nullable: true })
  size?: number;
}
