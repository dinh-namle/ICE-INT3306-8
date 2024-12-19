import { Entity, PrimaryGeneratedColumn, Column,  ManyToOne } from "typeorm";
import { User } from "./User";
import { Program } from "./Program";

@Entity() // Decorator to mark the class as an entity
export class Report {
    @PrimaryGeneratedColumn() // Primary key column with auto-increment
    id!: number;

    @Column()
    title!: string; //Bao cao ve ...

    @Column()
    asset!: string; //uet.vnu.edu.vn

    @Column()
    weakness!: string; //cwe-89

    @Column({nullable: true})
    severity!: string;  // attack_vector|attack_complexity|privileges_required|user_interaction|scope|confidentiality|integrity|availability

    @Column({type: "mediumtext"})
    description!: string; // Mo ta ve ...

    @Column({type: "mediumtext"})
    impact!: string; // Tac dong den ...

    @Column({default: "open"})
    status!: string; // open|close

    @Column()
    createdAt!: Date;

    @Column()
    updatedAt!: Date;

    @ManyToOne(() => User, user => user.reports)
    user!: User;

    @ManyToOne(() => Program, program => program.reports)
    program!: Program;
}