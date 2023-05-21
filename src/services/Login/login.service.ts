import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import jwt from "jsonwebtoken";

export const loginService = async (data: any) => {
  const userRepository = AppDataSource.getRepository(User);

  const userExist = await userRepository.findOneBy({
    email: data.email,
  });

  if (!userExist) {
    throw new AppError("Email or password invalid", 403);
  }

  const passwordMatch = await compare(data.password, userExist.password);

  if (!passwordMatch) {
    throw new AppError("Email or password invalid", 403);
  }

  const token = jwt.sign(
    {
      id: userExist.id,
    },
    process.env.SECRET_KEY as string,
    {
      subject: String(userExist.id),
      expiresIn: "24h",
    }
  );

  return { token };
};
