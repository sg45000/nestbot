import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterQuestions1599487177096 implements MigrationInterface {
    name = 'AlterQuestions1599487177096'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" ALTER COLUMN "image_url" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" ALTER COLUMN "image_url" SET NOT NULL`);
    }

}
