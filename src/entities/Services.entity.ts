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
import Cost from "./costs.entity";
import Employee_service from "./employees_service.entity";

@Entity("services")
class Service {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  enterprise: string;

  @Column({ length: 50 })
  vehicle: string;

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

  @OneToMany(() => Cost, (cost) => cost.service, { cascade: true })
  cost: Cost[];

  @OneToMany(
    () => Employee_service,
    (employee_service) => employee_service.service,
    { onDelete: "CASCADE" }
  )
  employee_service: Employee_service[];
}

export default Service;
