import { Request, Response } from 'express';
import { Injectable, NestMiddleware } from '@nestjs/common';

import { DocumentType, ReturnModelType } from '@typegoose/typegoose';
import { User as UserDocument } from './user/user.schema';
import { InjectModel } from 'nestjs-typegoose';

declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface User extends DocumentType<UserDocument> {}
  }
}

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  constructor(
    @InjectModel(UserDocument)
    private userModel: ReturnModelType<typeof UserDocument>,
  ) {}

  async use(req: Request, res: Response, next) {
    const { name } = req.session;

    const user = await this.userModel.findOne({ name });
    if (!user) {
      return next();
    }

    req.logIn(user, { session: false }, (err) => {
      return next(err);
    });
  }
}
