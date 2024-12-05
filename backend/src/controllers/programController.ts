import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Program } from "../entity/Program";

// Lấy danh sách chương trình
export const program_get_list = async (req: Request, res: Response) => {
    const programRepository = AppDataSource.getRepository(Program);
    const programs = await programRepository.find();
    res.json(programs);
};