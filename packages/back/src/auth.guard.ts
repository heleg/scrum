import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

declare module 'express-session' {
  interface SessionData {
    name: string;
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();

    return !!request?.session.name;
    request;
  }
}
