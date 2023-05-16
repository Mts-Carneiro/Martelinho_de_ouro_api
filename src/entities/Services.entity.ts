import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

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
}
