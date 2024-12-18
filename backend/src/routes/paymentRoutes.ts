import { Router } from "express";
import { addPayoutMethod, getPaymentHistory, removePayoutMethod } from "../controllers/paymentController";

const router = Router();

// Add a payout method
router.post("/add", addPayoutMethod);

// Get payment history
router.get("/history/:userId", getPaymentHistory);

// Remove a payout method 
router.delete("/remove/:payoutMethodId", removePayoutMethod);

export default router;
