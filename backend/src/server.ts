import "reflect-metadata"; // Import bắt buộc cho TypeORM
import { AppDataSource } from "./data-source"; // Kết nối TypeORM
import express from "express";
import cors from "cors";
import authRoutes from "./routes/loginRoutes"; // Routes đăng nhập và OAuth
import registerRoutes from "./routes/registerRoutes"; // Routes đăng ký
import partnerRoutes from "./routes/partnerRoutes"; // Routes dành cho Partner
import researcherRoutes from "./routes/researcherRoutes"; // Routes dành cho Researcher
import userRoutes from "./routes/userRoutes";

const app = express();

// Khai báo PORT một lần duy nhất
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", registerRoutes); // Routes đăng ký
app.use("/api/auth", authRoutes); // Routes đăng nhập và OAuth
app.use("/api/partners", partnerRoutes); // Routes dành cho Partner
app.use("/api/researchers", researcherRoutes); // Routes dành cho Researcher
app.use("/api/users", userRoutes); // Routes dành cho user


// Middleware xử lý lỗi
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("Error:", err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Khởi động server
const startServer = async () => {
  try {
    // Kết nối cơ sở dữ liệu
    await AppDataSource.initialize();
    console.log("📦 Database connected successfully!");

    // Lắng nghe trên cổng
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error starting server:", error);
    process.exit(1); // Thoát nếu có lỗi
  }
};

startServer();
