import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

// Đăng nhập với email và mật khẩu
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
};

// Google OAuth (đơn giản hóa)
export const googleLogin = async (req: Request, res: Response) => {
    // Xử lý xác thực Google OAuth
    res.json({ message: "Google login not implemented" });
};

// GitHub OAuth (đơn giản hóa)
export const githubLogin = async (req: Request, res: Response) => {
    // Xử lý xác thực GitHub OAuth
    res.json({ message: "GitHub login not implemented" });
};
