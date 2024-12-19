import { Router } from "express";
import { addPayoutMethod, removePayoutMethod } from "../controllers/paymentController";

const router = Router();

router.post("/add", addPayoutMethod);
router.delete("/remove/:id", removePayoutMethod);

export default router;
