import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '../auth.guard';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
  @Get()
  get(@Req() { user }: Request) {
    return user;
  }
}
