import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import AppDataSource from "../data-source";
import User from "../entities/user.entity";
import { AppError } from "../errors/AppError";

export const ensureEmailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.body;

  const userRepository = AppDataSource.getRepository(User);

  const existingUser = await userRepository.findOneBy({
    email: user.email,
  });

  if (!existingUser) {
    throw new AppError("this Email not registered", 409);
  }

  return next();
};
