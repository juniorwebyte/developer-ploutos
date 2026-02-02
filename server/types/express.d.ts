import { Request } from 'express';

declare global {
  namespace Express {
    interface UserToken {
      id: string;
      role: string;
      username?: string;
    }

    interface Request {
      user?: UserToken;
    }
  }
}

export {};