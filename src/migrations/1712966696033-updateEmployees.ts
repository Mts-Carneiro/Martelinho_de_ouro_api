import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEmployees1712966696033 implements MigrationInterface {
    name = 'UpdateEmployees1712966696033'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" ADD "contact" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employees" ADD "remuneration" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employees" ADD "pix" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "pix"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "remuneration"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "contact"`);
    }

}
