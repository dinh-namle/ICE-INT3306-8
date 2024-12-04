import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import { errorHandler } from "./middlewares/errorHandler";
import userRoutes from "./routes/userRoutes"; // Import các route
import payoutMethodRoutes from "./routes/payoutMethodRoutes";

const app: Application = express();

// Middleware
app.use(cors()); // Cho phép truy cập từ domain khác (Cross-Origin Resource Sharing)
app.use(helmet()); // Bảo mật HTTP headers
app.use(morgan("dev")); // Ghi log request
app.use(bodyParser.json()); // Xử lý request body dạng JSON

// Routes
app.use("/api/users", userRoutes); // Route liên quan đến users
app.use("/api/payout-methods", payoutMethodRoutes);

// Catch-all Error Handler
app.use(errorHandler);

export default app;
