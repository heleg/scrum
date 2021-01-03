import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';

import { Entry } from './entry.schema';
import { InjectModel } from 'nestjs-typegoose';
import { CreateEntryInput } from './inputs/create-entry-input';
import { CurrentUser } from '../current-user.decorator';
import { User } from '../user/user.schema';

@Injectable()
@Resolver(() => Entry)
export class EntryResolver {
  constructor(
    @InjectModel(Entry) private entryModel: ReturnModelType<typeof Entry>,
    @InjectModel(User) private userModel: ReturnModelType<typeof User>,
  ) {}

  @Query(() => [Entry])
  entries() {
    return this.entryModel.find({});
  }

  @Mutation(() => Entry)
  async addEntry(
    @CurrentUser() name: string,
    @Args({ name: 'entryData', type: () => CreateEntryInput })
    entryData: CreateEntryInput,
  ) {
    const user = await this.userModel.findOne({ name });
    return this.entryModel.create({ userId: user._id, ...entryData });
  }

  @Mutation(() => Entry)
  async updateEntry(
    @CurrentUser() name: string,
    @Args({ name: 'entryData', type: () => CreateEntryInput })
    entryData: CreateEntryInput,
  ) {
    const user = await this.userModel.findOne({ name });
    return this.entryModel.create({ userId: user._id, ...entryData });
  }
}
