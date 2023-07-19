import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Liabilities from "../../entities/liabilities.entity";

export const retriveLiabilityService = async (id: string) => {
  const liabilityRepo = AppDataSource.getRepository(Liabilities);

  const liability = liabilityRepo.findOneBy({
    id: id,
  });

  if (!liability) {
    throw new AppError("Liability not exist", 409);
  }

  return liability;
};
