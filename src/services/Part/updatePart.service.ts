import AppDataSource from "../../data-source";
import Part from "../../entities/parts.entity";

export const updatePartService = async (id: string, data: any) => {
  const partRepo = AppDataSource.getRepository(Part);

  const part = await partRepo.findOneBy({
    id: id,
  });

  const newPart = partRepo.create({
    ...part,
    ...data,
  });

  await partRepo.save(newPart);

  return newPart;
};
