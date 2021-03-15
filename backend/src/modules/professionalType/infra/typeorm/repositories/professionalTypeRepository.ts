import { getRepository, Repository } from 'typeorm';
import ICreateProfessionalTypeDTO from '../../../dtos/ICreateProfessionalTypeDTO';
import IProfessionalTypeRepository from '../../../repositories/IProfessionalTypeRepository';
import  ProfessionalType from '../entities/ProfessionalType';

export default class ProfessionalTypeRepositoryController implements IProfessionalTypeRepository{
    private ormRepository: Repository<ProfessionalType>;

    constructor(){
        this.ormRepository = getRepository(ProfessionalType);
    }

    public async create(data:ICreateProfessionalTypeDTO): Promise<ProfessionalType> {
        const professionalType = this.ormRepository.create(data);
        await this.ormRepository.save(professionalType);
        return professionalType;
    }

    public async findAll(): Promise<ProfessionalType[]> {
        const listProfessionalType = this.ormRepository.find();
        return listProfessionalType || [];
    }

    public async findById(id: string): Promise<ProfessionalType | undefined>{
        const professionalType = this.ormRepository.findOne({
            where: { id }
        });

        return professionalType;
    }

    public async update(professionalType: ProfessionalType): Promise<ProfessionalType> {
        return await this.ormRepository.save(professionalType);
    }

    public async delete(professionalType: ProfessionalType): Promise<Boolean> {
        await this.ormRepository.remove(professionalType);
        return true;
    }
}
