import { prop, Ref, modelOptions } from '@typegoose/typegoose';
import { Field, ObjectType } from '@nestjs/graphql';

import { Entry } from '../entry/entry.schema';

@ObjectType()
@modelOptions({
  schemaOptions: {
    toObject: { virtuals: true },
  },
})
export class User {
  @Field()
  @prop({ required: true })
  name: string;

  @Field(() => [Entry], { nullable: 'items', name: 'entries' })
  @prop({
    ref: () => Entry,
    foreignField: 'userId',
    localField: '_id',
  })
  entries: Ref<Entry>[];
}
