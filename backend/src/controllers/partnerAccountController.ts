import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Partner } from "../entity/Partner";
import bcrypt from "bcrypt";

// Lấy thông tin tài khoản Partner
export const getPartnerAccount = async (req: Request, res: Response): Promise<void> => {
  const userId = (req as any).userId; // Middleware `authMiddleware` gán `userId`
  const partner = await AppDataSource.getRepository(Partner).findOneBy({ id: userId });

  if (!partner) {
    res.status(404).json({ message: "Partner not found" });
    return;
  }

  res.status(200).json(partner);
};

// Cập nhật thông tin tài khoản Partner
export const updatePartnerAccount = async (req: Request, res: Response): Promise<void> => {
  const userId = (req as any).userId;
  const { email, firstName, lastName, phone, country } = req.body;

  const partnerRepo = AppDataSource.getRepository(Partner);
  const partner = await partnerRepo.findOneBy({ id: userId });

  if (!partner) {
    res.status(404).json({ message: "Partner not found" });
    return;
  }

  partner.email = email || partner.email;
  partner.firstName = firstName || partner.firstName;
  partner.lastName = lastName || partner.lastName;
  partner.phone = phone || partner.phone;
  partner.country = country || partner.country;

  await partnerRepo.save(partner);
  res.status(200).json({ message: "Partner account updated successfully", partner });
};

// Thay đổi mật khẩu tài khoản Partner
export const changePartnerPassword = async (req: Request, res: Response): Promise<void> => {
  const userId = (req as any).userId;
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    res.status(400).json({ message: "Old password and new password are required" });
    return;
  }

  const partnerRepo = AppDataSource.getRepository(Partner);
  const partner = await partnerRepo.findOneBy({ id: userId });

  if (!partner) {
    res.status(404).json({ message: "Partner not found" });
    return;
  }

  const isMatch = await bcrypt.compare(oldPassword, partner.password);
  if (!isMatch) {
    res.status(400).json({ message: "Old password is incorrect" });
    return;
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  partner.password = hashedPassword;

  await partnerRepo.save(partner);
  res.status(200).json({ message: "Password changed successfully" });
};
