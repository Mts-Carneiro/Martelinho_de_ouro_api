import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUser, IUserRequest } from "../../interfaces/user.interface";
import { userResponseSchema } from "../../schemas/user.schema";

export const createUserService = async (
  userBody: IUserRequest
): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.create(userBody);

  await userRepository.save(user);

  const returnUser = userResponseSchema.parse(user);

  return returnUser;
};
