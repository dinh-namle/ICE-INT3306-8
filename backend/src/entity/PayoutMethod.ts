import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PayoutMethod {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type!: string;

  @Column()
  details!: string;
}
