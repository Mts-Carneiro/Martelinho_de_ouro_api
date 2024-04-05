import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUsers } from "../../interfaces/user.interface";
import { listUserSchema } from "../../schemas/user.schema";

export const getUsersService = async (): Promise<IUsers> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const usersReturn = listUserSchema.parse(users);

  return usersReturn;
};
