import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { PayoutMethod } from "../entity/PayoutMethod";
import { User } from "../entity/User";

// Add a payout method for a user
export const addPayoutMethod = async (req: Request, res: Response): Promise<void> => {
    const { userId, type, details } = req.body;

    if (!userId || !type || !details) {
        res.status(400).json({ message: "Missing required fields" });
        return;
    }

    const userRepository = AppDataSource.getRepository(User);
    const payoutMethodRepository = AppDataSource.getRepository(PayoutMethod);

    try {
        const user = await userRepository.findOneBy({ id: Number(userId) });
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        const payoutMethod = payoutMethodRepository.create({ type, details, user });
        await payoutMethodRepository.save(payoutMethod);

        res.status(201).json({ message: "Payout method added successfully", payoutMethod });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
