import { MigrationInterface, QueryRunner, Table } from "typeorm";


export class CreateUsersTable1624730677923 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'document',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'contract',
                    type: 'varchar',
                },
                {
                    name: 'username',
                    type: 'varchar'
                },
                {
                    name: 'occupation',
                    type: 'varchar'
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true
                },

                {
                    name: 'telefone1',
                    type: 'varchar',
                },

                {
                    name: 'telefone2',
                    type: 'varchar',
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }

            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
        await queryRunner.dropTable('users');
    }

}
