import { Request, Response } from 'express';
import { RepositoryNotTreeError } from 'typeorm';
import Repository from '../../typeorm/repositories/professionalRepository';

export default class ProfessionalController {
    public async create(request: Request, response: Response): Promise<Response>{
        const { nome, telefone, email, tipoDeProfissional, situacao } = request.body;
        const repository = new Repository();

        try {
            const professional = await repository.create({
                nome,
                telefone,
                email,
                tipoDeProfissional,
                situacao,
            });
    
            return response.json(professional);
            
        } catch (error) {
            return response.json({
                message: 'Erro ao salvar dados do profissional',
                description: error,
            });
        }
    }

    public async index(request: Request, response: Response):Promise<Response>{
        const repository = new Repository();
        const listProfessional = await repository.findAll();
        return response.json(listProfessional);
    }

    public async update(request: Request, response: Response): Promise<Response>{
        const { 
            id, 
            nome, 
            telefone, 
            email, 
            tipoDeProfissional, 
            situacao
        } = request.body;

        const repository = new Repository();
        const professional = await repository.findById(id);

        if(!professional){
            return response.json({message: 'Profissional não encontrado!'});
        }

        professional.nome = nome;
        professional.telefone = telefone;
        professional.email = email;
        professional.tipoDeProfissional = tipoDeProfissional;
        professional.situacao = situacao;

        await repository.update(professional);
        return response.json(professional);
    }

    public async delete(request:Request, response: Response): Promise<Response>{
        const { id } = request.body;
        const repository = new Repository();
        const professional = await repository.findById(id);

        if(!professional){
            return response.json({message: 'Profissional não encontrado'});
        }

        await repository.delete(professional);

        return response.json({message: 'Profissional excluído com sucesso'});
    }
}