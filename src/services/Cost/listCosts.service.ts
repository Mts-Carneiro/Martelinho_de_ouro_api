import AppDataSource from "../../data-source";
import Asset from "../../entities/assets.entity";
import Cost from "../../entities/costs.entity";

export const listAllCostsService = async () => {
  const costRepo = AppDataSource.getRepository(Cost);

  const costs = costRepo.find();

  return costs;
};
