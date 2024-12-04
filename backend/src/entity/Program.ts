import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Program {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    description: string | undefined;

    @Column()
    startDate!: Date;

    @Column()
    endDate!: Date;
}