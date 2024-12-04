import { Router } from "express";
import { createUser, get_list, get_info} from "../controllers/userController";

const router = Router();

// Lấy danh sách user
router.get("/api/user/get-list", get_list);

// Lấy thông tin user
router.get("/api/user/get-info/:id", get_info);

// Tạo user mới
router.post("/", createUser);

export default router;
