import { Entity, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { Program } from './Program';

@Entity()
export class Partner {
    @PrimaryGeneratedColumn()
    id!: number; // Non-null assertion

    @Column()
    email!: string;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    jobTitle!: string;

    @Column()
    company!: string;

    @Column()
    reasonForContact!: string;

    @Column()
    phone!: string;

    @Column()
    country!: string;

    @Column()
    password!: string; 

    @CreateDateColumn()
    createdAt!: Date;

    @Column({ nullable: true }) // Đánh dấu `address` là tùy chọn
    address?: string;

    @Column()
    businessName!: string;

    @Column({ nullable: true })
    website?: string; // Nullable nếu không phải đối tác nào cũng có website

    @ManyToMany(() => Program)
    @JoinTable()
    programs!: Program[];
}
