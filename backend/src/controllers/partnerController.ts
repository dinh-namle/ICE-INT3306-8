import { Request, Response } from "express";
import { Partner } from "../entity/Partner";
import { AppDataSource } from "../data-source";

export const registerPartner = async (req: Request, res: Response): Promise<Response> => {
  const {
    email,
    firstName,
    lastName,
    jobTitle,
    company,
    reasonForContact,
    phone,
    country,
  } = req.body;

  // Validate dữ liệu
  if (!email || !firstName || !lastName || !jobTitle || !company || !reasonForContact || !phone || !country) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Lưu dữ liệu vào database
    const partnerRepository = AppDataSource.getRepository(Partner);
    const newPartner = partnerRepository.create({
      email,
      firstName,
      lastName,
      jobTitle,
      company,
      reasonForContact,
      phone,
      country,
    });

    await partnerRepository.save(newPartner);

    return res.status(201).json({ message: "Partner registered successfully", partner: newPartner });
  } catch (error) {
    console.error("Error registering partner:", error);
    return res.status(500).json({ message: "Server error", error });
  }
};
