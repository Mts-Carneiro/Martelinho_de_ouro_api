import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./user.entity";

@Entity("assets")
class Asset {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  tipe: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 300 })
  description: string;

  @Column()
  value: number;

  @CreateDateColumn()
  createdAt: string;

  @ManyToOne(() => User, (user) => user.assets, { onDelete: "CASCADE" })
  user: User;
}

export default Asset;
