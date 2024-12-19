import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { PayoutMethod } from '../entity/PayoutMethod';

let nextId = 1;

// Add a payout method
export const addPayoutMethod = async (req: Request, res: Response): Promise<void> => {
  console.log("Add PayoutMethod called with: ", req.body); // Logging input data
  const { type, details } = req.body;

  if (!type || !details) {
    console.log("Validation failed"); // Logging validation issue
    res.status(400).json({ message: 'Missing required fields' });
    return;
  }

  const payoutMethodRepository = AppDataSource.getRepository(PayoutMethod);
  const newMethod = payoutMethodRepository.create({ id: nextId++, type, details });

  try {
    await payoutMethodRepository.save(newMethod);
    const allPayoutMethods = await payoutMethodRepository.find();
    console.log("PayoutMethods after addition: ", allPayoutMethods); // Logging result
    res.status(201).json({ payoutMethods: allPayoutMethods });
  } catch (error) {
    console.log("Error saving PayoutMethod: ", error); // Logging error
    res.status(500).json({ message: 'Server error', error });
  }
};

// Remove a payout method
export const removePayoutMethod = async (req: Request, res: Response): Promise<void> => {
  console.log("Remove PayoutMethod called with ID: ", req.params.id); // Logging input data
  const { id } = req.params;

  const payoutMethodRepository = AppDataSource.getRepository(PayoutMethod);
  try {
    const methodToRemove = await payoutMethodRepository.findOneBy({ id: Number(id) });

    if (!methodToRemove) {
      console.log("PayoutMethod not found"); // Logging missing method
      res.status(404).json({ message: 'Payout method not found' });
      return;
    }

    await payoutMethodRepository.remove(methodToRemove);
    const allPayoutMethods = await payoutMethodRepository.find();
    console.log("PayoutMethods after removal: ", allPayoutMethods); // Logging result
    res.status(200).json({ payoutMethods: allPayoutMethods });
  } catch (error) {
    console.log("Error removing PayoutMethod: ", error); // Logging error
    res.status(500).json({ message: 'Server error', error });
  }
};
