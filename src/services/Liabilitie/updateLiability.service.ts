import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Liabilities from "../../entities/liabilities.entity";

export const updateLiabilityService = async (data: any, id: string) => {
  const liabilityRepo = AppDataSource.getRepository(Liabilities);

  const liability = await liabilityRepo.findOneBy({
    id: id,
  });

  if (!liability) {
    throw new AppError("Liability not exist", 409);
  }

  const newLiability = liabilityRepo.create({
    ...liability,
    ...data,
  });

  await liabilityRepo.save(newLiability);

  return newLiability;
};
