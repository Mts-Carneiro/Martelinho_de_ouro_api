import AppDataSource from "../../data-source";
import Liabilities from "../../entities/liabilities.entity";

export const createLiabilityService = async (data: any, userId: string) => {
  const liabilityRepo = AppDataSource.getRepository(Liabilities);

  const liability = liabilityRepo.create({
    ...data,
    user: userId,
  });

  await liabilityRepo.save(liability);

  return liability;
};
