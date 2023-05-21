import { Request, Response } from "express";
import { loginService } from "../services/Login/login.service";

export const loginController = async (req: Request, res: Response) => {
  const loginBody = req.body;
  const token = await loginService(loginBody);
  return res.status(200).json(token);
};
