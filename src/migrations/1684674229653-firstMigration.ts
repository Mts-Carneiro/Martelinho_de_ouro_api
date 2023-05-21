import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1684674229653 implements MigrationInterface {
    name = 'FirstMigration1684674229653'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "liabilities" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "Tipe" character varying(50) NOT NULL, "name" character varying(50) NOT NULL, "description" character varying(300) NOT NULL, "value" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_4ef7aa825c6104e95f787636bb8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employees_services" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" integer NOT NULL, "service_type" character varying(50) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b6dc5acf294c3f40f19151f9bc3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employees" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "employeeServiceId" uuid, CONSTRAINT "PK_b9535a98350d5b26e7eb0c26af4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "assets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "Tipe" character varying(50) NOT NULL, "name" character varying(50) NOT NULL, "description" character varying(300) NOT NULL, "value" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_da96729a8b113377cfb6a62439c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(40) NOT NULL, "email" character varying(40) NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "services" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "enterprise" character varying(50) NOT NULL, "vehicle" character varying(50) NOT NULL, "license_plate" character varying(50) NOT NULL, "description" character varying(50) NOT NULL, "value" character varying(50) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "employeeServiceId" uuid, CONSTRAINT "PK_ba2d347a3168a296416c6c5ccb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "costs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "value" integer NOT NULL, "serviceId" uuid, CONSTRAINT "PK_05cc8aa05396a72553cdff6d5be" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "liabilities" ADD CONSTRAINT "FK_a07746c7a2059be1a8ca32cc2c1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_737991e10350d9626f592894cef" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_7a7e21cb96153d52e10bd277eb2" FOREIGN KEY ("employeeServiceId") REFERENCES "employees_services"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assets" ADD CONSTRAINT "FK_d8cf9bdec7d2fad0852aec349c1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "services" ADD CONSTRAINT "FK_3905389899d96c4f1b3619f68d5" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "services" ADD CONSTRAINT "FK_2084e50e7e0d491108b803c42b0" FOREIGN KEY ("employeeServiceId") REFERENCES "employees_services"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "costs" ADD CONSTRAINT "FK_ad34746ed353ffb1dbedb59fdf3" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "costs" DROP CONSTRAINT "FK_ad34746ed353ffb1dbedb59fdf3"`);
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "FK_2084e50e7e0d491108b803c42b0"`);
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "FK_3905389899d96c4f1b3619f68d5"`);
        await queryRunner.query(`ALTER TABLE "assets" DROP CONSTRAINT "FK_d8cf9bdec7d2fad0852aec349c1"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_7a7e21cb96153d52e10bd277eb2"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_737991e10350d9626f592894cef"`);
        await queryRunner.query(`ALTER TABLE "liabilities" DROP CONSTRAINT "FK_a07746c7a2059be1a8ca32cc2c1"`);
        await queryRunner.query(`DROP TABLE "costs"`);
        await queryRunner.query(`DROP TABLE "services"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "assets"`);
        await queryRunner.query(`DROP TABLE "employees"`);
        await queryRunner.query(`DROP TABLE "employees_services"`);
        await queryRunner.query(`DROP TABLE "liabilities"`);
    }

}
