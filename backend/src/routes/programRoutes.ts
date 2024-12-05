import { Router } from "express";
import { program_approve, program_get_list } from "../controllers/programController";

const router = Router();

// Lấy danh sách program
router.get("/api/program/get-list", program_get_list);

router.put("/api/program/approve/:id", program_approve)
export default router;