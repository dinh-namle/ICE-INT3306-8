import { Request, Response, NextFunction } from "express";

export const registerResearcher = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { username, firstName, lastName, country, day, month, year } = req.body;

  if (!username || !firstName || !lastName || !country || !day || !month || !year) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }

  const dateOfBirth = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  try {
    // Xử lý logic
    const researcher = { username, firstName, lastName, country, dateOfBirth };
    // Giả sử lưu thành công vào database
    res.status(201).json({ message: "Researcher registered successfully", researcher });
  } catch (error) {
    next(error); // Truyền lỗi cho middleware xử lý lỗi
  }
};
