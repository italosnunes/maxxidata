import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Container, Box, Btn, Label, Divisor, Content} from './styles';

import ProfessionalType from '../../pages/ProfessionalType';
import Professional from '../../pages/Professional';

const Menu = () => {

    const [isType, setIsType] = useState(false);
    const [isProfessional, setIsProfessional] = useState(false);

    const handleViewType = () => {
        setIsProfessional(false);
        setIsType(true);
    }

    const handleViewProfessional = () => {
        setIsType(false);
        setIsProfessional(true);
    }
    
    return(
        <>
            <Container>
                <Box>
                    <Btn title="teste" onPress={handleViewType}>
                        <Icon name="layers" size={30} color="#566676" /> 
                        <Label>Tipo</Label>  
                    </Btn>
                    <Divisor />
                    <Btn title="teste" onPress={handleViewProfessional}>
                        <Icon name="users" size={30} color="#566676" />   
                        <Label>Profissional</Label>  
                    </Btn>                   
                </Box>
            </Container>
            <Content>
                {isType && <ProfessionalType/>}
                {isProfessional && <Professional/>}
            </Content>
        </>
    )
}

export default Menu;