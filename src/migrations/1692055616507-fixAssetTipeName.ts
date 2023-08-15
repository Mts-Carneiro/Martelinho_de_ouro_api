import { MigrationInterface, QueryRunner } from "typeorm";

export class FixAssetTipeName1692055616507 implements MigrationInterface {
    name = 'FixAssetTipeName1692055616507'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "liabilities" RENAME COLUMN "Tipe" TO "tipe"`);
        await queryRunner.query(`ALTER TABLE "assets" RENAME COLUMN "Tipe" TO "tipe"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assets" RENAME COLUMN "tipe" TO "Tipe"`);
        await queryRunner.query(`ALTER TABLE "liabilities" RENAME COLUMN "tipe" TO "Tipe"`);
    }

}
