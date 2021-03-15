import React from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';

const ProfessionalTypeItem = ({
    professionalType,
    handleDelete,
    handleEdit,
}) => {
    function setEditing() {
        handleEdit(professionalType);
    }

    return (
        <Container>
            <section className="body">
                <h4>{professionalType.descricao}</h4>
            </section>
            <section className="footer">
                <div className="icon-container">
                    <button
                        type="button"
                        className="icon"
                        onClick={() => setEditing()}
                    >
                        <FiEdit3 size={20} />
                    </button>

                    <button
                        type="button"
                        className="icon"
                        onClick={() => handleDelete(professionalType.id)}
                    >
                        <FiTrash size={20} />
                    </button>
                </div>
            </section>
        </Container>
    );
};

export default ProfessionalTypeItem;
