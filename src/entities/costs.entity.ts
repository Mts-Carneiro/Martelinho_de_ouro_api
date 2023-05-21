import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Service from "./Services.entity";

@Entity("costs")
class Cost {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column()
  value: number;

  @ManyToOne(() => Service, (service) => service.cost, { onDelete: "CASCADE" })
  service: Service;
}

export default Cost;
