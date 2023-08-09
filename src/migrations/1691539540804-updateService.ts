import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateService1691539540804 implements MigrationInterface {
    name = 'UpdateService1691539540804'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" ADD "status" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "services" ADD "delivery_date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "license_plate"`);
        await queryRunner.query(`ALTER TABLE "services" ADD "license_plate" character varying(7) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "license_plate"`);
        await queryRunner.query(`ALTER TABLE "services" ADD "license_plate" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "delivery_date"`);
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "status"`);
    }

}
