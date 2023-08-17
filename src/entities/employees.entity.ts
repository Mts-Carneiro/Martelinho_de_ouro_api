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
import Employee_service from "./employees_service.entity";

@Entity("employees")
class Employee {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.employee, { onDelete: "CASCADE" })
  user: User;

  @OneToMany(
    () => Employee_service,
    (employee_service) => employee_service.employee,
    { onDelete: "CASCADE" }
  )
  employee_service: Employee_service[];
}

export default Employee;
