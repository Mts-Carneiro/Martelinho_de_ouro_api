import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  partResponseSchema,
  partSchema,
  listPartsSchema,
} from "../schemas/part.schema";

type IPartRequest = z.infer<typeof partSchema>;
type IPart = z.infer<typeof partResponseSchema>;
type IParts = z.infer<typeof listPartsSchema>;
type IPartUpdate = DeepPartial<IPartRequest>;

export { IPart, IPartRequest, IParts, IPartUpdate };
