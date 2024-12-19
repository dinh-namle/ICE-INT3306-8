import { Router } from "express";
import { getPartnerAccount, updatePartnerAccount } from "../controllers/partnerAccountController";

const router = Router();

// Thêm trực tiếp handler mà không cần wrapAsync
router.get("/:id", async (req, res, next) => {
  try {
    await getPartnerAccount(req, res);
  } catch (error) {
    next(error); // Gửi lỗi về middleware xử lý lỗi
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    await updatePartnerAccount(req, res);
  } catch (error) {
    next(error); // Gửi lỗi về middleware xử lý lỗi
  }
});

export default router;
