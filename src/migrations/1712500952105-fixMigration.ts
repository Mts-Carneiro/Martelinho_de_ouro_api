import { MigrationInterface, QueryRunner } from "typeorm";

export class FixMigration1712500952105 implements MigrationInterface {
    name = 'FixMigration1712500952105'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Part" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "tipe" character varying NOT NULL, "value" integer NOT NULL, "serviceId" uuid, CONSTRAINT "PK_3f37b3b6afa2ec032e825bb9d9d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "services" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "enterprise" character varying(50) NOT NULL, "vehicle" character varying(50) NOT NULL, "phone" character varying(50) NOT NULL, "license_plate" character varying(7) NOT NULL, "description" character varying(50) NOT NULL, "value" integer NOT NULL, "status" character varying NOT NULL, "delivery_date" TIMESTAMP NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_ba2d347a3168a296416c6c5ccb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "liabilities" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tipe" character varying(50) NOT NULL, "name" character varying(50) NOT NULL, "description" character varying(300) NOT NULL, "value" integer NOT NULL, "date" TIMESTAMP NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_4ef7aa825c6104e95f787636bb8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employees" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_b9535a98350d5b26e7eb0c26af4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "trading_name" character varying(40) NOT NULL, "email" character varying(40) NOT NULL, "password" character varying NOT NULL, "CNPJ" character varying NOT NULL, "phone" character varying NOT NULL, "reset_token" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "assets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tipe" character varying(50) NOT NULL, "name" character varying(50) NOT NULL, "description" character varying(300) NOT NULL, "value" integer NOT NULL, "date" TIMESTAMP NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_da96729a8b113377cfb6a62439c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Part" ADD CONSTRAINT "FK_a708cb00c0d32f54c1c2033047c" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "services" ADD CONSTRAINT "FK_3905389899d96c4f1b3619f68d5" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "liabilities" ADD CONSTRAINT "FK_a07746c7a2059be1a8ca32cc2c1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_737991e10350d9626f592894cef" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assets" ADD CONSTRAINT "FK_d8cf9bdec7d2fad0852aec349c1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assets" DROP CONSTRAINT "FK_d8cf9bdec7d2fad0852aec349c1"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_737991e10350d9626f592894cef"`);
        await queryRunner.query(`ALTER TABLE "liabilities" DROP CONSTRAINT "FK_a07746c7a2059be1a8ca32cc2c1"`);
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "FK_3905389899d96c4f1b3619f68d5"`);
        await queryRunner.query(`ALTER TABLE "Part" DROP CONSTRAINT "FK_a708cb00c0d32f54c1c2033047c"`);
        await queryRunner.query(`DROP TABLE "assets"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "employees"`);
        await queryRunner.query(`DROP TABLE "liabilities"`);
        await queryRunner.query(`DROP TABLE "services"`);
        await queryRunner.query(`DROP TABLE "Part"`);
    }

}
