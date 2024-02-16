import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateParts1708043119312 implements MigrationInterface {
    name = 'UpdateParts1708043119312'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Part" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "tipe" character varying NOT NULL, "value" integer NOT NULL, "serviceId" uuid, CONSTRAINT "PK_3f37b3b6afa2ec032e825bb9d9d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "services" ADD "phone" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Part" ADD CONSTRAINT "FK_a708cb00c0d32f54c1c2033047c" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Part" DROP CONSTRAINT "FK_a708cb00c0d32f54c1c2033047c"`);
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "phone"`);
        await queryRunner.query(`DROP TABLE "Part"`);
    }

}
