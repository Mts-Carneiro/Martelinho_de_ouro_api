import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

const ensureDataIsValidMiddleware =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    const validatedData = schema.parse(req.body);
    req.body = validatedData;

    return next();
  };

export default ensureDataIsValidMiddleware;
