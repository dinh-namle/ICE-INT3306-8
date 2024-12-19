import express from 'express';
import { registerPartner } from '../controllers/partnerController';

const router = express.Router();

// Middleware xử lý lỗi cho hàm async
const wrapAsync = (fn: Function) => {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Đăng ký đối tác
router.post('/register', wrapAsync(registerPartner));

export default router;
