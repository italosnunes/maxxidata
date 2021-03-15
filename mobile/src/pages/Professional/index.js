import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Container, Title} from './styles';
import ProfessionalItem from '../../components/ProfessionalItem';
import api from '../../services/api';

const Professional = () => {
    const [listProfessional, setListProfessional] = useState([]);

    useEffect(()=>{
        async function loadProfessional() {
            const response = await api.get('/professional');
            setListProfessional(response.data);
        }

        loadProfessional();
    },[])
    return(
        <ScrollView>
            <Container>
                <Title>Profissionais</Title>
                {listProfessional.map(item => <ProfessionalItem professional={item}/>)}
            </Container>

        </ScrollView>
    )
}

export default Professional;