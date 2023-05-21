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

  @Column({ length: 50 })
  license_plate: string;

  @Column({ length: 50 })
  description: string;

  @Column({ length: 50 })
  value: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.services, { onDelete: "CASCADE" })
  user: User;

  @OneToMany(() => Cost, (cost) => cost.service, { cascade: true })
  cost: Cost[];

  @ManyToOne(
    () => Employee_service,
    (employee_service) => employee_service.services,
    { onDelete: "CASCADE" }
  )
  employee_service: Employee_service;
}

export default Service;
