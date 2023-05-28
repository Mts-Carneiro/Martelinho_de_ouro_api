import AppDataSource from "../../data-source";
import Cost from "../../entities/costs.entity";

export const updateCostService = async (id: string, data: any) => {
  const costRepo = AppDataSource.getRepository(Cost);

  const cost = await costRepo.findOneBy({
    id: id,
  });

  const newCost = costRepo.create({
    ...cost,
    ...data,
  });

  await costRepo.save(newCost);

  return newCost;
};
