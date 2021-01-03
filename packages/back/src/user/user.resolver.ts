import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { DocumentType, ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';

import { User } from './user.schema';
import { Entry } from '../entry/entry.schema';

@Injectable()
@Resolver(() => User)
export class UserResolver {
  constructor(
    @InjectModel(User) private userModel: ReturnModelType<typeof User>,
    @InjectModel(Entry) private entryModel: ReturnModelType<typeof Entry>,
  ) {}

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userModel.find({});
  }

  @ResolveField()
  async entries(@Parent() user: DocumentType<User>) {
    const populated = await user.populate('entries').execPopulate();
    return populated.entries;
  }
}
