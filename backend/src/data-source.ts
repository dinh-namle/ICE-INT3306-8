import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql", // Loại cơ sở dữ liệu
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : undefined,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true, // Tự động đồng bộ schema (chỉ dùng cho dev)
  logging: true, // Hiển thị log truy vấn
  entities: ["src/entity/**/*.ts"], // Đường dẫn đến các entity
  migrations: ["src/migration/**/*.ts"], // Đường dẫn đến các migration
  subscribers: ["src/subscriber/**/*.ts"], // Đường dẫn đến các subscribers
});
