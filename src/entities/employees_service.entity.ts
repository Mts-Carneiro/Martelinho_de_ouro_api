import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("employees_services")
class Employee_service {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  value: number;

  @Column({ length: 50 })
  service_type: string;

  @CreateDateColumn()
  createdAt: Date;
}
