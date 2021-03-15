import { Request, Response } from 'express';
import Repository from '../../typeorm/repositories/professionalTypeRepository';

export default class ProfessionalTypeController {
    public async create(request: Request, response: Response):Promise<Response> {
        const { descricao } = request.body;
        const repository = new Repository();
        const professionalType = await repository.create({
            descricao,
        });

        return response.json(professionalType);
    }

    public async index(request: Request, response: Response):Promise<Response> {
        const repository = new Repository();
        const listProfessionalType = await repository.findAll();
        return response.json(listProfessionalType);
    }

    public async update(request: Request, response: Response):Promise<Response>{
        const {id, descricao, situacao} = request.body;
        const repository = new Repository();

        const professionalType = await repository.findById(id);

        if(!professionalType){
            return response.json({message: 'Tipo de profissional não encontrado!'});
        }

        professionalType.descricao = descricao;
        professionalType.situacao = situacao;

        await repository.update(professionalType);
      
        return response.json(professionalType);

    }

    public async delete(request: Request, response: Response): Promise<Response>{
        const { id } = request.body;
        const repository = new Repository();
        const professionalType = await repository.findById(id);

        if( !professionalType ) {
            return response.json({message: 'Tipo de profissional não encontrado'});
        }

        await repository.delete(professionalType);

        return response.json({message: 'Tipo de profissional excluído com sucesso!'});
    }
}

