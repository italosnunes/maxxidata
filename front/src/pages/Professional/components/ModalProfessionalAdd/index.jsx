import React, { useCallback, useRef } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import Select from '../../../../components/UI/Select';
import { Form } from './styles';

import Input from '../../../../components/UI/Input';
import Modal from '../../../../components/Modal';


const ModalProfessionalAdd = ({
    isOpen,
    setIsOpen,
    handleAddProfessional,
    selectProfessionalType,
}) => {
    const formRef = useRef(null);

    const handleSubmit = useCallback(
        async (data) => {
            handleAddProfessional(data);
            setIsOpen();
        },
        [handleAddProfessional, setIsOpen],
    );

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Novo profissional</h1>
                <Input name="nome" placeholder="Digite o nome"/>
                <Input name="email" placeholder="Digite o seu e-mail"/>
                <Input name="telefone" placeholder="Digite o telefone de contato"/>
                <Select 
                    name="tipoDeProfissional" 
                    options={selectProfessionalType} 
                    placeholder="Tipo de Profissional"
                />
                
                <button type="submit">
                    <p className="button-text">Salvar</p>
                    <div className="button-icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Form>
        </Modal>
    );
};

export default ModalProfessionalAdd;
