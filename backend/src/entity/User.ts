import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { PayoutMethod } from "./PayoutMethod";
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

    @Column({ default: "active" }) // Giá trị mặc định
    status!: string;

    @OneToMany(() => PayoutMethod, payoutMethod => payoutMethod.user)
    payoutMethods!: PayoutMethod[];
}