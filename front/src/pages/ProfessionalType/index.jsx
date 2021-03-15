import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api';
import ProfessionalTypeItem from './components/ProfessionalTypeItem';
import ModalProfessionalTypeAdd from './components/ModalProfessionalTypeAdd';
import ModalProfessionalTypeEdit from './components/ModalProfessionalTypeEdit';
import Button from '../../components/UI/Button';

import {
    Container, 
    Content, 
    ProfessionalTypeContainer,
    Header,
} from './styles';

const ProfessionalType = () => {

    const [professionalType, setProfessionalType] = useState([]);
    const [editing, setEditing] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);

    useEffect(() => {
        async function loadProfessionalType() {
            const response = await api.get('/professional-type');
            setProfessionalType(response.data);
        }

        loadProfessionalType();
    }, []);

    const toggleModal = useCallback(() => {
        setModalOpen(!modalOpen);
    }, [modalOpen]);

    function toggleEditModal() {
        setEditModalOpen(!editModalOpen);
    }

    async function handleAddProfessionalType(
        type,
        ) {
            try {
                const response = await api.post('/professional-type', {
                    ...type
                });

                setProfessionalType([...professionalType, response.data]);
                 
            } catch (error) {
                console.log(error);
            }
        }

    async function handleDelete(id) {
        try {
            await api.delete('/professional-type', {data:{id}})
            setProfessionalType(professionalType.filter(type => type.id !== id ))
        } catch (error) {
            console.log(error);
        }
    }

    async function handleUpdate (professionalType) {
        try {
            const response = await api.put('/professional-type', {
                ...editing,
                ...professionalType
            })

            setProfessionalType(
                professionalType.map(mappedProfessionalType => mappedProfessionalType.id === editing.id ? {...response.data} : mappedProfessionalType)
            )
        } catch (error) {
            console.log(error);
        }
    }

    function handleEdit(professionalType) {
        setEditing(professionalType);
        toggleEditModal();
    }

    return(
        <Container>
            <Content>
                <Header>
                    <h1>Tipo de Profissional</h1>
                    <Button onClick={toggleModal}>Adicionar</Button>
                </Header>
                <ModalProfessionalTypeAdd
                    isOpen={modalOpen}
                    setIsOpen={toggleModal}
                    handleAddProfessionalType={handleAddProfessionalType}
                />
                <ModalProfessionalTypeEdit
                    isOpen={editModalOpen}
                    setIsOpen={toggleEditModal}
                    editingProfessionalType={editing}
                    handleUpdateProfessionalType={handleUpdate}
                />
                <ProfessionalTypeContainer>
                {professionalType &&
                    professionalType.map(professionalType => (
                        <ProfessionalTypeItem
                            key={professionalType.id}
                            professionalType={professionalType}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />
                    ))}
                </ProfessionalTypeContainer>

            </Content>
        </Container>
    )
}

export default ProfessionalType;