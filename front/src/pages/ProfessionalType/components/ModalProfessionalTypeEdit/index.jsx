import React, { useRef, useCallback } from 'react';

import {FiCheckSquare} from 'react-icons/fi'
import Modal from '../../../../components/Modal';
import Input from '../../../../components/UI/Input';

import {Form} from './styles';


const ModalProfessionalTypeEdit = ({
    isOpen,
    setIsOpen,
    editingProfessionalType,
    handleUpdateProfessionalType,
}) => {
    const formRef = useRef(null);
    const handleSubmit = useCallback(async (data) => {
        handleUpdateProfessionalType(data);

        setIsOpen();
    },[handleUpdateProfessionalType,setIsOpen])

    return(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit} initialData={editingProfessionalType}>
                <h1>Editar Tipo de Profissional</h1>
                <Input name="descricao" placeholder="Descrição ex: Médico"/>
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

export default ModalProfessionalTypeEdit;
