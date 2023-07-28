import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

const sendEmailRequest = z.object({
  to: z.string(),
  subject: z.string(),
  text: z.string(),
});

const userResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  createdAt: z.date(),
});

const userUpdateSchema = userSchema.partial();

const listUserSchema = userResponseSchema.array();

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export {
  userSchema,
  userResponseSchema,
  userUpdateSchema,
  listUserSchema,
  loginSchema,
  sendEmailRequest,
};
