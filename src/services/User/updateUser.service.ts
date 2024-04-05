import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUser, IUserUpdate } from "../../interfaces/user.interface";
import { userResponseSchema } from "../../schemas/user.schema";

export const updateUserService = async (
  updateUserBody: IUserUpdate,
  userId: string
): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository<User>(User);

  const oldUser = await userRepository.findOneBy({
    id: userId,
  });

  const newUser = userRepository.create({
    ...oldUser,
    ...updateUserBody,
  });

  await userRepository.save(newUser);

  const returnUser = userResponseSchema.parse(newUser);

  return returnUser;
};
