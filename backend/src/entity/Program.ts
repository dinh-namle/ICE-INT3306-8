import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Report } from "./Report";
import { User } from "./User";

@Entity()
export class Program {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({type: "mediumtext"})
  description?: string; 

  @Column()
  status!: string;

  @Column()
  reward!: number;

  @Column()
  scope!: string;

  @Column()
  startDate!: Date;

  @Column()
  endDate!: Date;
  
  @ManyToOne(() => User, user => user.programs)
  user!: User;

  @OneToMany(() => Report, report => report.program)
  reports!: Report[];
}
