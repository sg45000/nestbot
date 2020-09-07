import {MigrationInterface, QueryRunner} from "typeorm";

export class init1599439354950 implements MigrationInterface {
    name = 'init1599439354950'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "line_user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "line_user_id" character varying NOT NULL, "host" boolean NOT NULL DEFAULT false, "active" boolean NOT NULL, CONSTRAINT "UQ_3232f2acfb28b85051bd9102054" UNIQUE ("line_user_id"), CONSTRAINT "PK_e264954b147300fa1a47b1ae6bd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "questions" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "image_url" character varying NOT NULL, CONSTRAINT "PK_08a6d4b0f49ff300bf3a0ca60ac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "question_choices" ("id" SERIAL NOT NULL, "choice_text" character varying NOT NULL, "question_id" integer NOT NULL, "next_question_id" integer NOT NULL, CONSTRAINT "PK_d6d95fee6a251b392aeb9778cb0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "random_messages" ("id" SERIAL NOT NULL, "message" character varying NOT NULL, CONSTRAINT "PK_387d98c5a6a5738bc5a88929198" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "question_choices" ADD CONSTRAINT "FK_3ee10095721b594eea07c1ef19e" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "question_choices" ADD CONSTRAINT "FK_8423940d55a1f5b9a026177754b" FOREIGN KEY ("next_question_id") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_choices" DROP CONSTRAINT "FK_8423940d55a1f5b9a026177754b"`);
        await queryRunner.query(`ALTER TABLE "question_choices" DROP CONSTRAINT "FK_3ee10095721b594eea07c1ef19e"`);
        await queryRunner.query(`DROP TABLE "random_messages"`);
        await queryRunner.query(`DROP TABLE "question_choices"`);
        await queryRunner.query(`DROP TABLE "questions"`);
        await queryRunner.query(`DROP TABLE "line_user"`);
    }

}
