import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./user.entity";
import Part from "./parts.entity";

@Entity("services")
class Service {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  enterprise: string;

  @Column({ length: 50 })
  vehicle: string;

  @Column({ length: 50 })
  phone: string;

  @Column({ length: 7 })
  license_plate: string;

  @Column({ length: 50 })
  description: string;

  @Column()
  value: number;

  @Column()
  status: string;

  @Column()
  delivery_date: Date;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.services, { onDelete: "CASCADE" })
  user: User;

  @OneToMany(() => Part, (part) => part.service, { cascade: true })
  part: Part[];
}

export default Service;
