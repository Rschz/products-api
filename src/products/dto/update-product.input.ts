import {
  CreateCarInput,
  CreateClothingInput,
  CreateProductInput,
} from './create-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => Int)
  id: number;
}

@InputType()
export class UpdateCarInput extends PartialType(CreateCarInput) {
  @Field(() => Int)
  id: number;
}

@InputType()
export class UpdateClothingInput extends PartialType(CreateClothingInput) {
  @Field(() => Int)
  id: number;
}
