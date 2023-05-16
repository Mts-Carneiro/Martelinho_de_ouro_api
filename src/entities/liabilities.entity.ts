import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("liabilities")
class Liabilities {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  Tipe: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 300 })
  description: string;

  @Column()
  value: number;

  @CreateDateColumn()
  createdAt: string;
}
