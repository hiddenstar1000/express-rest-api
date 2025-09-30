// Extend Express Request type to include user payload
import { Request } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: { id: string; role: string };
  }
}
