import { Request, Response } from "express";
import { createUserService } from "../services/User/createUser.service";
import { getUsersService } from "../services/User/listUsers.service";
import { userRetriveService } from "../services/User/retriveUser.service";
import { updateUserService } from "../services/User/updateUser.service";
import { deleteUserService } from "../services/User/deleteUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const userData = req.body;
  const newUser = await createUserService(userData);
  return res.status(201).json(newUser);
};

export const getUsersController = async (req: Request, res: Response) => {
  const listUser = await getUsersService();
  return res.status(200).json(listUser);
};

export const userRetriveController = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = await userRetriveService(userId);
  return res.status(200).json(user);
};

export const updateUserController = async (req: Request, res: Response) => {
  const updateUserBody = req.body;
  console.log(req.body);
  const id = req.user.id;

  const updateUser = await updateUserService(updateUserBody, id);

  return res.status(200).json(updateUser);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const id: string = req.user.id;
  const deleteUser = await deleteUserService(id);
  return res.status(204).json(deleteUser);
};

/* export const sendResetEmailPasswordController = async (
  req: Request,
  res: Response
) => {
  const { email } = req.body;
  const { protocol } = req;
  const host = req.get("host");

  await usersService.sendResetEmailPassword(email, protocol, host!);

  return res.json({ message: "token send" });
};

export const resetPasswordController = async (req: Request, res: Response) => {
  const { password } = req.body;
  const { token } = req.params;

  await usersService.resetPassword(password, token);

  return res.json({ message: "password change with sucess" });
}; */
