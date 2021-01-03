import { Field, InputType } from '@nestjs/graphql';
import { Allow } from 'class-validator';

@InputType()
export class CreateEntryInput {
  @Field()
  @Allow()
  done: string;

  @Field()
  @Allow()
  toDo: string;

  @Field()
  @Allow()
  impediment: string;
}
