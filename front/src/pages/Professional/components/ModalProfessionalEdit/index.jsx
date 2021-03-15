import React, { useRef, useCallback } from 'react';

import {FiCheckSquare} from 'react-icons/fi';
import Select from '../../../../components/UI/Select';
import Modal from '../../../../components/Modal';
import Input from '../../../../components/UI/Input';

import {Form} from './styles';


const ModalProfessionalEdit = ({
    isOpen,
    setIsOpen,
    editingProfessional,
    handleUpdateProfessional,
    selectProfessionalType,
}) => {
    const formRef = useRef(null);
    const handleSubmit = useCallback(async (data) => {
        handleUpdateProfessional(data);
        setIsOpen();
    },[handleUpdateProfessional,setIsOpen])

    const optionsSituacao = [
        {value: true, label: "ATIVO" },
        {value: false, label: "INATIVO"}
    ];

    const handleDefaultSituation = (professional) => {
        var i;
        
        try {
            optionsSituacao.forEach(function(op, index) {
                if (op.value === professional.situacao) {
                    i = index;
                }
            });
            
            return i;        
            
        } catch (error) {
            return 0;
        }
    }

    const handleDefaultProfessionalType = (professional) => {
        var i;
        
        try {
            selectProfessionalType.forEach(function(op, index){
                if(op.value === professional.professionalType.id){
                    i = index;
                }
            });
              
            return i;
            
        } catch (error) {
            return 0;
        }
    }

    return(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit} initialData={editingProfessional}>
                <h1>Editar Profissional</h1>
                <Input name="nome"/>
                <Input name="email"/>
                <Input name="telefone"/>
                <Select 
                    name="situacao" 
                    options={optionsSituacao} 
                    defaultValue={optionsSituacao[
                        handleDefaultSituation(editingProfessional)
                    ]}
                    placeholder="Selecione Ativo ou Inativo"/>
                <Select 
                    name="tipoDeProfissional" 
                    options={selectProfessionalType}
                    defaultValue={selectProfessionalType[
                        handleDefaultProfessionalType(editingProfessional)
                    ]} 
                    placeholder="Selecione o tipo de profissional"/>
                <button type="submit">
                    <div className="button-text">Salvar</div>
                    <div className="button-icon">
                        <FiCheckSquare size={24}/>
                    </div>
                </button>
            </Form>
        </Modal>
    )
}

export default ModalProfessionalEdit;
