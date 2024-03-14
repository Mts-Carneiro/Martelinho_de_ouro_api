import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateAsset1710379153592 implements MigrationInterface {
    name = 'UpdateAsset1710379153592'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assets" ADD "date" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "date"`);
    }

}
