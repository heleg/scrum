import { prop, Ref } from '@typegoose/typegoose';
import { Field, ObjectType } from '@nestjs/graphql';

import { User } from '../user/user.schema';

@ObjectType()
export class Entry {
  @prop({ required: true, ref: () => User })
  userId: Ref<User>;

  // What did I complete yesterday that contributed to the team meeting our sprint goal?
  @Field()
  @prop({ required: true })
  done: string;

  // What do I plan to complete today to contribute to the team meeting our sprint goal?
  @Field()
  @prop({ required: true })
  toDo: string;

  // Do I see any impediment that could prevent me or the team from meeting our sprint goal?
  @Field()
  @prop({ required: true })
  impediment: string;
}
