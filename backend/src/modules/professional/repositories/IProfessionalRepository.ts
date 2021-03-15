import Professional from '../infra/typeorm/entities/Professional';
import ICreateProfessionalDTO from '../dtos/ICreateProfessionalDTO';

export default interface IProfessional {
    create(data: ICreateProfessionalDTO): Promise<Professional>;
    findAll(): Promise<Professional[]>;
    update(professional: Professional): Promise<Professional>;
    findById(id:string): Promise<Professional | undefined>;
    delete(professional: Professional): Promise<Boolean>;  
}
