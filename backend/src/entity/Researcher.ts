import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Researcher {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  country!: string;

  @Column()
  dateOfBirth!: string; // Định dạng: "YYYY-MM-DD"

  @CreateDateColumn()
  createdAt!: Date;
}
