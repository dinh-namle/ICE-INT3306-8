import { Router } from "express";
import { addPayoutMethod, getPaymentHistory } from "../controllers/paymentController";

const router = Router();

// Add a payout method
router.post("/add", addPayoutMethod);

// Get payment history
router.get("/history/:userId", getPaymentHistory);

export default router;
