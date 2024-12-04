import { Router } from "express";
import { addPayoutMethod } from "../controllers/payoutMethodController";

const router = Router();

// Add a payout method
router.post("/add", addPayoutMethod);

export default router;
