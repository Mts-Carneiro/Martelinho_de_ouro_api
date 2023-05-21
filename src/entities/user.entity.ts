import { hashSync } from "bcryptjs";
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Service from "./Services.entity";
import Liabilities from "./liabilities.entity";
import Employee from "./employees.entity";
import Asset from "./assets.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 40 })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  @OneToMany(() => Service, (service) => service.user, { cascade: true })
  services: Service[];

  @OneToMany(() => Liabilities, (liabilities) => liabilities.user, {
    cascade: true,
  })
  liabilities: Liabilities[];

  @OneToMany(() => Employee, (employee) => employee.user, { cascade: true })
  employee: Employee[];

  @OneToMany(() => Asset, (asset) => asset.user, { cascade: true })
  assets: Asset[];
}

export default User;
