import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

// Lấy danh sách user
export const get_list = async (req: Request, res: Response) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  res.json(users);
};

// Lấy thông tin user theo ID
export const get_info = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id || isNaN(Number(id))) {
      res.status(400).json({ message: "Invalid user ID" });
  }

  const userRepository = AppDataSource.getRepository(User);

  try {
      const user = await userRepository.findOneBy({ id: Number(id) });
      if (!user) {
          res.status(404).json({ message: "User not found" });
      }
      res.json(user);
  } catch (error) {
      res.status(500).json({ message: "Server error", error });
  }
};

// Tạo user mới
export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).json({ message: "Missing required fields" });
  }

  const userRepository = AppDataSource.getRepository(User);
  const newUser = userRepository.create({ username, email, password });
  await userRepository.save(newUser);

  res.status(201).json({ message: "User created successfully", user: newUser });
};
