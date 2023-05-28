import AppDataSource from "../../data-source";
import Cost from "../../entities/costs.entity";

export const creatCostService = async (data: any, id: string) => {
  const CostRepo = AppDataSource.getRepository(Cost);

  const cost = CostRepo.create({
    ...data,
    user: id,
  });

  await CostRepo.save(cost);

  return cost;
};
