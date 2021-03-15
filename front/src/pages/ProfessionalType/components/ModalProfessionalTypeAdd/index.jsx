import React, { useCallback, useRef } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { Form } from './styles';

import Input from '../../../../components/UI/Input';
import Modal from '../../../../components/Modal';


const ModalProfessionalTypeAdd = ({
    isOpen,
    setIsOpen,
    handleAddProfessionalType,
}) => {
    const formRef = useRef(null);

    const handleSubmit = useCallback(
        async (data) => {
            handleAddProfessionalType(data);
            setIsOpen();
        },
        [handleAddProfessionalType, setIsOpen],
    );

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Novo tipo de profissional</h1>
                <Input name="descricao" placeholder="Digite a descrição" />
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

export default ModalProfessionalTypeAdd;
