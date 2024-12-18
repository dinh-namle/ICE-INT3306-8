import { Entity, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { User } from './User';
import { Program } from './Program';

@Entity()
export class Partner extends User {

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

    @CreateDateColumn()
    createdAt!: Date;

    @Column()
    businessName!: string;

    @ManyToMany(() => Program)
    @JoinTable()
    programs!: Program[];
}
