import { MigrationInterface, QueryRunner } from "typeorm";

export class LiabilityUpdate1710461696219 implements MigrationInterface {
    name = 'LiabilityUpdate1710461696219'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "liabilities" ADD "date" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "liabilities" DROP COLUMN "date"`);
    }

}
