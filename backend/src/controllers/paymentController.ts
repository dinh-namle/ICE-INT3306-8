import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { PayoutMethod } from "../entity/PayoutMethod";

// Add a payout method
export const addPayoutMethod = async (req: Request, res: Response): Promise<void> => {
  const { type, details } = req.body;

  if (!type || !details) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  const payoutMethodRepository = AppDataSource.getRepository(PayoutMethod);

  try {
    const payoutMethod = payoutMethodRepository.create({ type, details });
    await payoutMethodRepository.save(payoutMethod);

    res.status(201).json({ message: "Payout method added successfully", payoutMethod });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Remove a payout method
export const removePayoutMethod = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: "Payout method ID is required" });
    return;
  }

  const payoutMethodRepository = AppDataSource.getRepository(PayoutMethod);

  try {
    const payoutMethod = await payoutMethodRepository.findOneBy({ id: Number(id) });
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
