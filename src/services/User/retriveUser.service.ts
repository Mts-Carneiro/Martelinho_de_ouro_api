import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUser } from "../../interfaces/user.interface";
import { userResponseSchema } from "../../schemas/user.schema";

export const userRetriveService = async (userId: string): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  const returnUser = userResponseSchema.parse(user);

  return returnUser;
};
