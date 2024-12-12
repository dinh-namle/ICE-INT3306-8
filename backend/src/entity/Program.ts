import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Program {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ nullable: true }) // Cho phép description rỗng
  description?: string; 

  @Column()
  startDate!: Date;

  @Column()
  endDate!: Date;
}
