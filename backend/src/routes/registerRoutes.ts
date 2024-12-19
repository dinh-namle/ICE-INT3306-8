import express from "express";
import { register } from "../controllers/authController";
import { Request, Response, NextFunction } from "express";

const router = express.Router();

// Route đăng ký tài khoản
router.post("/register", wrapAsync(register));

// Hàm bọc async (wrapAsync) để xử lý lỗi
function wrapAsync(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>
) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((error) => next(error));
  };
}

export default router;
