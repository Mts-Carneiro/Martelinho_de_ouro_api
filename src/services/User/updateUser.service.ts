import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";

export const updateUserService = async (
  updateUserBody: any,
  userId: string
) => {
  const userRepository = AppDataSource.getRepository(User);

  const oldUser = await userRepository.findOneBy({
    id: userId,
  });

  const newUser = userRepository.create({
    ...oldUser,
    ...updateUserBody,
  });

  await userRepository.save(newUser);

  return newUser;
};
