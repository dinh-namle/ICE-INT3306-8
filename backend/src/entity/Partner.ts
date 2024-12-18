import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { User } from './User';
import { Program } from './Program';

@Entity()
export class Partner extends User {
    @Column()
    businessName!: string;

    @ManyToMany(() => Program)
    @JoinTable()
    programs!: Program[];
}