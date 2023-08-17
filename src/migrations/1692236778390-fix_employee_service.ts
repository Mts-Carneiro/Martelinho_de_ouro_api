import { MigrationInterface, QueryRunner } from "typeorm";

export class FixEmployeeService1692236778390 implements MigrationInterface {
    name = 'FixEmployeeService1692236778390'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "FK_2084e50e7e0d491108b803c42b0"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_7a7e21cb96153d52e10bd277eb2"`);
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "employeeServiceId"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "employeeServiceId"`);
        await queryRunner.query(`ALTER TABLE "employees_services" ADD "serviceId" uuid`);
        await queryRunner.query(`ALTER TABLE "employees_services" ADD "employeeId" uuid`);
        await queryRunner.query(`ALTER TABLE "employees_services" ADD CONSTRAINT "FK_c3a6a30df529185463a1c75ee44" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employees_services" ADD CONSTRAINT "FK_7d57f9176af48cb91c45ea509e7" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees_services" DROP CONSTRAINT "FK_7d57f9176af48cb91c45ea509e7"`);
        await queryRunner.query(`ALTER TABLE "employees_services" DROP CONSTRAINT "FK_c3a6a30df529185463a1c75ee44"`);
        await queryRunner.query(`ALTER TABLE "employees_services" DROP COLUMN "employeeId"`);
        await queryRunner.query(`ALTER TABLE "employees_services" DROP COLUMN "serviceId"`);
        await queryRunner.query(`ALTER TABLE "employees" ADD "employeeServiceId" uuid`);
        await queryRunner.query(`ALTER TABLE "services" ADD "employeeServiceId" uuid`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_7a7e21cb96153d52e10bd277eb2" FOREIGN KEY ("employeeServiceId") REFERENCES "employees_services"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "services" ADD CONSTRAINT "FK_2084e50e7e0d491108b803c42b0" FOREIGN KEY ("employeeServiceId") REFERENCES "employees_services"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
