import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Service from "./Services.entity";
import Employee from "./employees.entity";

@Entity("employees_services")
class Employee_service {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  value: number;

  @Column({ length: 50 })
  service_type: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Service, (service) => service.employee_service, {
    cascade: true,
  })
  services: Service[];

  @OneToMany(() => Employee, (employee) => employee.employee_service, {
    cascade: true,
  })
  employees: Employee[];
}

export default Employee_service;
