import { Router } from "express";
import { getUsers, createUser } from "../controllers/userController";

const router = Router();

// Lấy danh sách user
router.get("/", getUsers);

// Tạo user mới
router.post("/", createUser);

export default router;
