import ProfessionalType from '../../../../professionalType/infra/typeorm/entities/ProfessionalType';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

@Entity('professional')
class Professional {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    telefone: string;

    @Column()
    email: string;

    @Column()
    tipoDeProfissional: string;

    @ManyToOne(() => ProfessionalType)
    @JoinColumn({name: 'tipoDeProfissional'})
    professionalType: ProfessionalType;

    @Column()
    situacao: Boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Professional;
