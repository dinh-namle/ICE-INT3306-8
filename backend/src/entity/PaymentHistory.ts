import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class PaymentHistory {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    date!: Date;

    @Column()
    amount!: number;

    @Column()
    status!: string;

    @ManyToOne(() => User, user => user.paymentHistory)
    user!: User;
}
