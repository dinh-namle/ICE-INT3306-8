import { Router } from "express";
import { user_get_list, user_get_info, user_update, user_create, user_delete, user_changePassword} from "../controllers/userController";

const router = Router();

// Lấy danh sách user
router.get("/get-list", user_get_list);

// Lấy thông tin user
router.get("/get-info/:id", user_get_info);

// Cập nhật thông tin user
router.put("/update/:id", user_update);

// Đổi mật khẩu
router.post("/change-password/:id", user_changePassword)

// Tạo user mới
router.post("/create", user_create);

// Xóa user
router.delete("/delete/:id", user_delete);

export default router;
