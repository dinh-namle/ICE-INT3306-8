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

    @Column({ nullable: true }) 
    email!: string;

    @Column({ nullable: true })
    phoneNumber!: string;

    @Column({ nullable: true }) 
    webSite!: string;

    @Column({ nullable: true }) 
    biography!: string;

    @Column({ nullable: true })
    role!: string;

    @Column({ nullable: true })
    birthDate!: Date;

    @Column({ nullable: true })
    createdAt!: Date;

    @Column({ nullable: true })
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