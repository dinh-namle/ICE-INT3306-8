import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

// Lấy danh sách user
export const user_get_list = async (req: Request, res: Response): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  res.json(users);
  return;
};

// Lấy thông tin user theo ID
export const user_get_info = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;

  if (!id || isNaN(Number(id))) {
      res.status(400).json({ message: "Invalid user ID" });
      return;
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

// Cập nhật thông tin user
export const user_update = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  const { username, email, phoneNumber, webSite, biography } = req.body; 

  if (!id || isNaN(Number(id))) {
      res.status(400).json({ message: "Invalid user ID" });
  }

  const userRepository = AppDataSource.getRepository(User);

  try {
      // Tìm user theo ID
      const user = await userRepository.findOneBy({ id: Number(id) });

      if (!user) {
          res.status(404).json({ message: "User not found" });
          return;
      }

      user.username = username || user.username;
      user.email = email || user.email;
      user.phoneNumber = phoneNumber || user.phoneNumber;
      user.webSite = webSite || user.webSite;
      user.biography = biography || user.biography;

      await userRepository.save(user);

      res.json({ message: "User updated successfully", user });
  } catch (error) {
      res.status(500).json({ message: "Server error", error });
  }
};

// Tạo user mới
export const user_create = async (req: Request, res: Response): Promise<void> => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).json({ message: "Missing required fields" });
  }

  const userRepository = AppDataSource.getRepository(User);
  const newUser = userRepository.create({ username, email, password });
  await userRepository.save(newUser);

  res.status(201).json({ message: "User created successfully", user: newUser });
};

// Xóa user
export const user_delete = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;

  // Kiểm tra tính hợp lệ của ID
  if (!id || isNaN(Number(id))) {
      res.status(400).json({ message: "Invalid user ID" });
      return;
  }

  const userRepository = AppDataSource.getRepository(User);

  try {
      // Tìm user theo ID
      const user = await userRepository.findOneBy({ id: Number(id) });

      // Kiểm tra xem người dùng có tồn tại không
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      // Xóa người dùng
      await userRepository.remove(user); 

      res.json({ message: "User deleted successfully" });
      return;
  } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ message: "Server error", error });
      return;
  }
};