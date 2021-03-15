import React from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';

const ProfessionalItem = ({
    professional,
    handleDelete,
    handleEdit,
}) => {

    function setEditing() {
        handleEdit(professional);
    }
  

    return (
        <Container>
            <section className="body">
                <h4>{professional.nome}</h4>
                <h5>{professional?.professionalType?.descricao}</h5>
                <p>{professional.email}</p>
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
                        onClick={() => handleDelete(professional.id)}
                    >
                        <FiTrash size={20} />
                    </button>
                </div>
            </section>
        </Container>
    );
};

export default ProfessionalItem;
