import AppDataSource from "../../data-source";
import Cost from "../../entities/costs.entity";
import { AppError } from "../../errors/AppError";

export const deleteCostService = async (id: string) => {
  const costRepo = AppDataSource.getRepository(Cost);

  const cost = await costRepo.findOneBy({
    id: id,
  });

  if (!cost) {
    throw new AppError("Cost not exist", 409);
  }

  await costRepo.remove(cost);
};
