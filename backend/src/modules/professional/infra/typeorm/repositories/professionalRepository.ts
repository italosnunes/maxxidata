import { getRepository, Repository } from 'typeorm';
import ICreateProfessionalDTO from  '../../../dtos/ICreateProfessionalDTO';
import IProfessionalRepository from '../../../repositories/IProfessionalRepository';
import Professional from '../entities/Professional';

export default class ProfessionalRepository implements IProfessionalRepository {
    private ormRepository: Repository<Professional>;

    constructor(){
        this.ormRepository = getRepository(Professional);
    }

    public async create(data: ICreateProfessionalDTO): Promise<Professional>{
        const professional = this.ormRepository.create(data);
        await this.ormRepository.save(professional);
        return professional;
    }

    public async findAll(): Promise<Professional[]> {
        const listProfessional = this.ormRepository.find({
            relations:["professionalType"]
        });
        return listProfessional || [];
    }

    public async findById(id:string): Promise<Professional | undefined>{
        const professional = this.ormRepository.findOne({
            where: { id },
        });

        return professional;
    }

    public async update(professional: Professional): Promise<Professional> {
        return await this.ormRepository.save(professional);
    }

    public async delete(professional: Professional): Promise<Boolean>{
        await this.ormRepository.remove(professional);
        return true;
    }
}