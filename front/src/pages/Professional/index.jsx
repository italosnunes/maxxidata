import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api';
import ProfessionalItem from './components/ProfessionalItem';
import ModalProfessionalAdd from './components/ModalProfessionalAdd';
import ModalProfessionalEdit from './components/ModalProfessionalEdit';
import Button from '../../components/UI/Button';

import {
    Container, 
    Content, 
    ProfessionalContainer,
    Header,
} from './styles';

const Professional = () => {

    const [professional, setProfessional] = useState([]);
    const [listProfessionalType, setListProfessionalType] = useState([]);
    const [optionsSelect, setOptionsSelect] = useState([]);
    const [editing, setEditing] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);

    async function loadProfessional() {
        const response = await api.get('/professional');
        setProfessional(response.data);
    }

    useEffect(() => {

        async function loadProfessionalType() {
            const response = await api.get('/professional-type');
            setListProfessionalType(response.data);
        }

        loadProfessional();
        loadProfessionalType();
        
    }, []);

    
    function selectProfessionalType() {
        let options = [];
        listProfessionalType.map(type => {
            const data = {
                value: type.id,
                label: type.descricao
            };

            options.push(data);
        })
        setOptionsSelect(options);
    }

    

    const toggleModal = useCallback(() => {
        setModalOpen(!modalOpen);
    }, [modalOpen]);

    function toggleEditModal() {
        if (optionsSelect.length === 0) {
            selectProfessionalType();
        }
        setEditModalOpen(!editModalOpen);
    }

    const handleNewProfessional = () => {
        selectProfessionalType();
        toggleModal();
    }

    async function handleAddProfessional(
        professionalNew,
        ) {
            try {
                const response = await api.post('/professional', professionalNew);

                setProfessional([...professional, response.data]);
            } catch (error) {
                console.log(error);
            }
        }

    async function handleDelete(id) {
        try {
            await api.delete('/professional', {data: { id } })
            setProfessional(professional.filter(prof => prof.id !== id ))
        } catch (error) {
            console.log(error);
        }
    }

    async function handleUpdate (professionalUpdate) {
       
        try {
            await api.put('/professional', {
                ...editing,
                ...professionalUpdate
            })
            loadProfessional();
        } catch (error) {
            console.log(error);
        }
    }

    function handleEdit(professionalEdit) {
        setEditing(professionalEdit);
        toggleEditModal();
    }

    return(
        <Container>
            <Content>
                <Header>
                    <h1>Profissional</h1>
                    <Button onClick={handleNewProfessional}>Adicionar Profissional</Button>
                </Header>
                <ModalProfessionalAdd
                    isOpen={modalOpen}
                    setIsOpen={toggleModal}
                    handleAddProfessional={handleAddProfessional}
                    selectProfessionalType={optionsSelect}
                />
                <ModalProfessionalEdit
                    isOpen={editModalOpen}
                    setIsOpen={toggleEditModal}
                    editingProfessional={editing}
                    handleUpdateProfessional={handleUpdate}
                    selectProfessionalType={optionsSelect}
                />
                <ProfessionalContainer>
                {professional &&
                    professional.map(professional => (
                        <ProfessionalItem
                            key={professional.id}
                            professional={professional}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />
                    ))}
                </ProfessionalContainer>

            </Content>
        </Container>
    )
}

export default Professional;