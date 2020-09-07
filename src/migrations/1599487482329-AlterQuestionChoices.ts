import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterQuestionChoices1599487482329 implements MigrationInterface {
    name = 'AlterQuestionChoices1599487482329'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_choices" DROP CONSTRAINT "FK_8423940d55a1f5b9a026177754b"`);
        await queryRunner.query(`ALTER TABLE "question_choices" ALTER COLUMN "next_question_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "question_choices" ADD CONSTRAINT "FK_8423940d55a1f5b9a026177754b" FOREIGN KEY ("next_question_id") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_choices" DROP CONSTRAINT "FK_8423940d55a1f5b9a026177754b"`);
        await queryRunner.query(`ALTER TABLE "question_choices" ALTER COLUMN "next_question_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "question_choices" ADD CONSTRAINT "FK_8423940d55a1f5b9a026177754b" FOREIGN KEY ("next_question_id") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
