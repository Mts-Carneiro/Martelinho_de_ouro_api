import AppDataSource from "../../data-source";
import Asset from "../../entities/assets.entity";
import Part from "../../entities/parts.entity";
import { AppError } from "../../errors/AppError";

export const retrivePartService = async (id: string) => {
  const partRepo = AppDataSource.getRepository(Part);

  const part = partRepo.findOneBy({
    id: id,
  });

  if (!part) {
    throw new AppError("Part not exist", 409);
  }

  return part;
};
