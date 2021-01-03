import { Body, Controller, Post, Session } from '@nestjs/common';
import { SessionData } from 'express-session';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

import { User } from '../user/user.schema';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    @InjectModel(User)
    private userModel: ReturnModelType<typeof User>,
  ) {}

  @Post('login')
  login(@Body() { name }: LoginDto, @Session() session: SessionData) {
    session.name = name;

    return this.userModel.findOneAndUpdate(
      { name },
      { $set: { name } },
      { upsert: true, new: true },
    );
  }
}
