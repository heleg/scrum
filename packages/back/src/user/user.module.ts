import { Module } from '@nestjs/common';

import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './user.schema';
import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';
import { EntryModule } from '../entry/entry.module';

@Module({
  imports: [TypegooseModule.forFeature([User]), EntryModule],
  controllers: [UserController],
  exports: [TypegooseModule],
  providers: [UserResolver],
})
export class UserModule {}
