import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";

export const createUserService = async (userBody: any) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.create(userBody);

  await userRepository.save(user);

  return user;
};
