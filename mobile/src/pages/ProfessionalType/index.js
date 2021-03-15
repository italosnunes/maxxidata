import React, { useEffect, useState } from 'react';
import {ScrollView} from 'react-native';
import api from '../../services/api';
import ProfessionalTypeItem from '../../components/ProfessionalTypeItem';
import { Container, Title} from './styles';

const ProfessionalType = () => {
    const [listProfessionalType, setListProfessionalType] = useState([]);

    useEffect(()=> {
        async function loadProfessionalType() {
            const response = await api.get('/professional-type');
            setListProfessionalType(response.data);
        }

        loadProfessionalType();
    },[])
    return(
        <ScrollView>
            <Container>
                <Title>Tipos de Profissionais</Title>
                {listProfessionalType.map(item => <ProfessionalTypeItem professional={item}/>)}
            </Container>
        </ScrollView>
    )
}

export default ProfessionalType;