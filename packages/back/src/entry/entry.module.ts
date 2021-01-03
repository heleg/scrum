import { Module, forwardRef } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

import { UserModule } from '../user/user.module';
import { Entry } from './entry.schema';
import { EntryResolver } from './entry.resolver';

@Module({
  imports: [TypegooseModule.forFeature([Entry]), forwardRef(() => UserModule)],
  providers: [EntryResolver],
  exports: [TypegooseModule],
})
export class EntryModule {}
