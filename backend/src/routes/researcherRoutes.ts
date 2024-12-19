import express from "express";
import { registerResearcher } from "../controllers/researcherController";

const router = express.Router();

// Middleware để bọc các hàm async
const wrapAsync = (fn: Function) => {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Đăng ký nhà nghiên cứu
router.post("/register", wrapAsync(registerResearcher));

export default router;
