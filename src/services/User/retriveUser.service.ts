import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";

export const userRetriveService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  return user;
};
