import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProfessional1615644377604 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'professional',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'nome',
                        type: 'varchar',  
                    },
                    {
                        name: 'telefone',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                    },
                    {
                        name: 'tipoDeProfissional',
                        type: 'uuid',
                    },
                    {
                        name: 'situacao',
                        type: 'boolean',
                        default: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'professional',
            new TableForeignKey({
                name: 'ProfessionalType',
                columnNames: ['tipoDeProfissional'],
                referencedColumnNames: ['id'],
                referencedTableName: 'professionalType',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('professional','ProfessionalType')
        await queryRunner.dropTable('professional');
    }

}
