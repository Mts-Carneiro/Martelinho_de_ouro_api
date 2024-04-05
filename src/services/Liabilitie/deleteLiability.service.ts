import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Liabilities from "../../entities/liabilities.entity";

export const deleteLiabilityService = async (id: string) => {
  const liabilityRepo = AppDataSource.getRepository(Liabilities);

  const liability = await liabilityRepo.findOneBy({
    id: id,
  });

  if (!liability) {
    throw new AppError("Liability nbot exist", 409);
  }

  await liabilityRepo.remove(liability);
};
