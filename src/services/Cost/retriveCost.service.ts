import AppDataSource from "../../data-source";
import Asset from "../../entities/assets.entity";
import Cost from "../../entities/costs.entity";
import { AppError } from "../../errors/AppError";

export const retriveCostService = async (id: string) => {
  const costRepo = AppDataSource.getRepository(Cost);

  const cost = costRepo.findOneBy({
    id: id,
  });

  if (!cost) {
    throw new AppError("Cost not exist", 409);
  }

  return cost;
};
