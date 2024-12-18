import express from "express";
import { login, googleLogin, githubLogin } from "../controllers/authController";
import { Request, Response, NextFunction } from "express";

const router = express.Router();

// Đăng nhập với email và mật khẩu
router.post("/login", wrapAsync(login));

// OAuth (Google và GitHub)
router.post("/oauth/google", wrapAsync(googleLogin));
router.post("/oauth/github", wrapAsync(githubLogin));

// Hàm bọc async (wrapAsync) phải được sử dụng với đúng kiểu
function wrapAsync(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>
) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((error) => next(error));
  };
}

export default router;
