import "reflect-metadata"; // Import bắt buộc cho TypeORM
import { AppDataSource } from "./data-source"; // Kết nối TypeORM
import app from "./app";

const PORT = process.env.PORT || 3000; // Port của server

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
