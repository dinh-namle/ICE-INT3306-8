import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class PayoutMethod {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    type!: string;

    @Column()
    details!: string;

    @ManyToOne(() => User, user => user.payoutMethods)
    user!: User;
}
