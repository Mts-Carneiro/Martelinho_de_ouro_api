import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Service from "./Services.entity";

@Entity("Part")
class Part {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column()
  tipe: string;

  @Column()
  value: number;

  @ManyToOne(() => Service, (service) => service.part, { onDelete: "CASCADE" })
  service: Service;
}

export default Part;
