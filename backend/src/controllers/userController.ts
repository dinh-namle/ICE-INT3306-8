import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

// Lấy danh sách người dùng
export const user_get_list = async (req: Request, res: Response): Promise<void> => {
    const userRepository = AppDataSource.getRepository(User);
    try {
        const users = await userRepository.find();
        res.json({ message: "User list retrieved successfully", data: users });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Lấy thông tin người dùng theo ID
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
            return;
        }
        res.json({ message: "User retrieved successfully", data: user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Cập nhật thông tin người dùng
export const user_update = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const { username, email, phoneNumber, webSite, biography } = req.body;

    if (!id || isNaN(Number(id))) {
        res.status(400).json({ message: "Invalid user ID" });
        return;
    }

    const userRepository = AppDataSource.getRepository(User);

    try {
        const user = await userRepository.findOneBy({ id: Number(id) });

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        user.username = username ?? user.username;
        user.email = email ?? user.email;
        user.phoneNumber = phoneNumber ?? user.phoneNumber;
        user.webSite = webSite ?? user.webSite;
        user.biography = biography ?? user.biography;

        await userRepository.save(user);

        res.json({ message: "User updated successfully", data: user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Tạo người dùng mới
export const user_create = async (req: Request, res: Response): Promise<void> => {
    const { username, email, password, phoneNumber, webSite, biography} = req.body;

    if (!username || !email || !password) {
        res.status(400).json({ message: "Missing required fields" });
        return;
    }

    const userRepository = AppDataSource.getRepository(User);

    try {
        const newUser = userRepository.create({ username, email, password, phoneNumber, webSite, biography });
        await userRepository.save(newUser);

        res.status(201).json({
            message: "User created successfully",
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Xóa người dùng
export const user_delete = async (req: Request, res: Response): Promise<void> => {
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
            return;
        }

        await userRepository.remove(user);

        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Đổi mật khẩu
export const user_changePassword = async (req: Request, res: Response): Promise<void> => {
  const { id, currentPassword, newPassword } = req.body;

  if ( !currentPassword || !newPassword) {
      res.status(400).json({ message: "Missing required fields" });
      return;
  }

  const userRepository = AppDataSource.getRepository(User);

  try {
      const user = await userRepository.findOneBy({ id: Number(id) });

      if (!user) {
          res.status(404).json({ message: "User not found" });
          return;
      }

      if (user.password !== currentPassword) {
          res.status(403).json({ message: "Current password is incorrect" });
          return;
      }

      user.password = newPassword;
      await userRepository.save(user);

      res.json({ message: "Password changed successfully" });
  } catch (error) {
      res.status(500).json({ message: "Server error", error });
  }
};