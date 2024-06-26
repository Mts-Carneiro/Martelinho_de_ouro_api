import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import { AppError } from "../errors/AppError";
import AppDataSource from "../data-source";
import User from "../entities/user.entity";

export const ensureUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.body;

  const userRepository = AppDataSource.getRepository(User);

  const existingUser = await userRepository.findOneBy({
    email: user.email,
  });

  if (existingUser) {
    throw new AppError("This alread registered", 409);
  }

  return next();
};
