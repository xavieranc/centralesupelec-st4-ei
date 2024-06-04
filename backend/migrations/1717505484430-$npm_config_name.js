import typeorm from "typeorm";

const { MigrationInterface, QueryRunner } = typeorm;

export default class  $npmConfigName1717505484430 {
    name = ' $npmConfigName1717505484430'

    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "movie" (
                "name" varchar PRIMARY KEY AUTOINCREMENT NOT NULL,
                "release_date" varchar NOT NULL
            )
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE "movie"
        `);
    }
}
