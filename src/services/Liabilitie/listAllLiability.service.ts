import AppDataSource from "../../data-source";
import Liabilities from "../../entities/liabilities.entity";
import { AppError } from "../../errors/AppError";

export const listAllLiabilitiesServices = async (userId: string) => {
  const liabilityRepo = AppDataSource.getRepository(Liabilities);

  const liabilities = liabilityRepo.find({
    where: {
      user: {
        id: userId,
      },
    },
    relations: {
      user: true,
    },
  });

  if (!liabilities) {
    throw new AppError("Liabilities not exist", 409);
  }

  return liabilities;
};
