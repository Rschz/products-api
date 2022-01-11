import { InputType, Int, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => Int)
  id: number;

  @Field()
  category: string;

  @Field()
  brand: string;
}

@InputType()
export class CreateCarInput extends PartialType(CreateProductInput) {
  @Field()
  model: string;

  @Field(() => Int)
  year: number;
}

@InputType()
export class CreateClothingInput extends PartialType(CreateProductInput) {
  @Field({ nullable: true })
  collection?: string;

  @Field(() => Int, { nullable: true })
  size?: number;
}
