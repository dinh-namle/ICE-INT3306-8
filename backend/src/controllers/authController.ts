import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

// Đăng ký tài khoản mới
export const register = async (req: Request, res: Response) => {
    const { email, password, confirmPassword } = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (!email || !password || !confirmPassword) {
        return res.status(400).json({ message: "Email, password, and confirmPassword are required" });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
    }

    // Validate mật khẩu
    if (
        password.length < 10 ||
        !/[A-Z]/.test(password) ||
        !/[!@#$%^&*]/.test(password) ||
        !/\d/.test(password)
    ) {
        return res.status(400).json({
            message: "Password must be at least 10 characters, include one uppercase letter, one special character, and one number.",
        });
    }

    try {
        const userRepository = AppDataSource.getRepository(User);

        // Kiểm tra email đã tồn tại
        const existingUser = await userRepository.findOne({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ message: "Email already in use" });
        }

        // Hash mật khẩu và lưu người dùng mới
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = userRepository.create({ email, password: hashedPassword });
        await userRepository.save(newUser);

        // Tạo token JWT
        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET!, { expiresIn: "1h" });
        return res.status(201).json({ message: "User registered successfully", token });
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({ message: "Server error" });
    }
};

// Đăng nhập
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({ where: { email } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Tạo token JWT
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: "1h" });
        return res.json({ message: "Login successful", token });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Server error" });
    }
};

// Google OAuth
export const googleLogin = async (req: Request, res: Response) => {
    // Xử lý xác thực Google OAuth
    res.json({ message: "Google login not implemented" });
};

// GitHub OAuth
export const githubLogin = async (req: Request, res: Response) => {
    // Xử lý xác thực GitHub OAuth
    res.json({ message: "GitHub login not implemented" });
};
