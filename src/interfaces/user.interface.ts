import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  listUserSchema,
  sendEmailRequest,
  userResponseSchema,
  userSchema,
} from "../schemas/user.schema";

type IUserRequest = z.infer<typeof userSchema>;
type IUsers = z.infer<typeof listUserSchema>;
type IUser = z.infer<typeof userResponseSchema>;
type IUserUpdate = DeepPartial<IUserRequest>;
type ISendEmailRequest = z.infer<typeof sendEmailRequest>;

export { IUser, IUserRequest, IUserUpdate, IUsers, ISendEmailRequest };
