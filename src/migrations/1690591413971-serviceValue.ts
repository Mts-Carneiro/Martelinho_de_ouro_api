import { MigrationInterface, QueryRunner } from "typeorm";

export class ServiceValue1690591413971 implements MigrationInterface {
    name = 'ServiceValue1690591413971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "services" ADD "value" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "services" ADD "value" character varying(50) NOT NULL`);
    }

}
