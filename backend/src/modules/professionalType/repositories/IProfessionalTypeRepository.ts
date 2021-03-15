import ProfessionalType from '../infra/typeorm/entities/ProfessionalType';
import ICreateProfessionalTypeDTO from '../dtos/ICreateProfessionalTypeDTO';

export default interface IProfessionalType {
    create(data: ICreateProfessionalTypeDTO): Promise<ProfessionalType>;
    findAll(): Promise<ProfessionalType[]>;
    update(professionalType: ProfessionalType):Promise<ProfessionalType>;
    findById(id:string): Promise<ProfessionalType | undefined>;
    delete(professionalType: ProfessionalType):Promise<Boolean>;
}