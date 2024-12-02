import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

// Lấy danh sách user
export const getUsers = async (req: Request, res: Response) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  res.json(users);
};

// Tạo user mới
export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const userRepository = AppDataSource.getRepository(User);
  const newUser = userRepository.create({ username, email, password });
  await userRepository.save(newUser);

  res.status(201).json({ message: "User created successfully", user: newUser });
};
