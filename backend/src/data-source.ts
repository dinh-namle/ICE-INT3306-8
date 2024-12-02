import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql", // Loại cơ sở dữ liệu
  host: "http://10.244.3.171 ", // Địa chỉ host
  port: 3306, // Port của MySQL
  username: "fall2024c8g6", // Tên người dùng
  password: "yourpassword", // Mật khẩu
  database: "bug_bounty_platform", // Tên cơ sở dữ liệu
  synchronize: true, // Tự động đồng bộ schema (chỉ dùng cho dev)
  logging: true, // Hiển thị log truy vấn
  entities: ["src/entity/**/*.ts"], // Đường dẫn đến các entity
  migrations: ["src/migration/**/*.ts"], // Đường dẫn đến các migration
  subscribers: ["src/subscriber/**/*.ts"], // Đường dẫn đến các subscribers
});
