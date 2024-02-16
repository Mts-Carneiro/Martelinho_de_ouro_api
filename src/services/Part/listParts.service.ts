import AppDataSource from "../../data-source";
import Asset from "../../entities/assets.entity";
import Part from "../../entities/parts.entity";

export const listAllPartsService = async () => {
  const partRepo = AppDataSource.getRepository(Part);

  const parts = partRepo.find();

  return parts;
};
