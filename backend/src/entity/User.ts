import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { PayoutMethod } from "./PayoutMethod"; 
import { PaymentHistory } from "./PaymentHistory"
import { Report } from "./Report"
import { Program } from "./Program"
@Entity() // Decorator to mark the class as an entity
export class User {
    @PrimaryGeneratedColumn() // Primary key column with auto-increment
    id!: number;

    @Column({ unique: true }) // Cột username phải là duy nhất
    username!: string;

    @Column()
    password!: string;

    @Column({ nullable: true }) // Có thể null
    email!: string;

    @Column({ nullable: true }) // Có thể null
    phoneNumber!: string;

    @Column({ nullable: true }) // Có thể null
    webSite!: string;

    @Column({ nullable: true }) // Có thể null
    biography!: string;

    @Column()
    role!: string;

    @Column()
    birthDate!: Date;

    @Column()
    createdAt!: Date;

    @Column()
    updatedAt!: Date;

    @Column({ nullable: true }) // Có thể null
    avatar!: string;

    @OneToMany(() => PayoutMethod, payoutMethod => payoutMethod.user)
    payoutMethods!: PayoutMethod[]; 
    
    @OneToMany(() => PaymentHistory, paymentHistory => paymentHistory.user) 
    paymentHistory!: PaymentHistory[];

    @OneToMany(() => Report, report => report.user)
    reports!: Report[];

    @OneToMany(() => Program, program => program.user)
    programs!: Program[];
}