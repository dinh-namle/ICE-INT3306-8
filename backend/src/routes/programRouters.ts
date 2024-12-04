import { Router } from "express";
import { program_get_list } from "../controllers/programController";

const router = Router();

// Add a payout method
router.put("/api/program/get-list", program_get_list);

export default router;