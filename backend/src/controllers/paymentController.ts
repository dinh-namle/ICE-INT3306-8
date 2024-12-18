import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { PayoutMethod } from "../entity/PayoutMethod";
import { User } from "../entity/User";
import { PaymentHistory } from "../entity/PaymentHistory";

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

// Get payment history for a user
export const getPaymentHistory = async (req: Request, res: Response): Promise<void> => {
    const userId = req.params.userId;

    if (!userId || isNaN(Number(userId))) {
        res.status(400).json({ message: "Invalid user ID" });
        return;
    }

    const paymentHistoryRepository = AppDataSource.getRepository(PaymentHistory);

    try {
        const paymentHistory = await paymentHistoryRepository.find({ where: { user: { id: Number(userId) } } });
        res.json(paymentHistory);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

//Remove a payout method
export const removePayoutMethod = async (req: Request, res: Response): Promise<void> => { 
    const { payoutMethodId } = req.params; 
    
    if (!payoutMethodId) { 
        res.status(400).json({ message: "Payout method ID is required" }); 
        return; 
    } 
    
    const payoutMethodRepository = AppDataSource.getRepository(PayoutMethod); 
    
    try { 
        const payoutMethod = await payoutMethodRepository.findOneBy({ id: Number(payoutMethodId) }); 
        if (!payoutMethod) { 
            res.status(404).json({ message: "Payout method not found" }); 
            return; 
        } 
        
        await payoutMethodRepository.remove(payoutMethod);
        
        res.status(200).json({ message: "Payout method removed successfully" }); 
    } catch (error) { 
        res.status(500).json({ message: "Server error", error }); 
    } 
};