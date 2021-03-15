import React from 'react';
import {FiLayers, FiUsers} from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Button from '../UI/Button';
import {Container, Box} from './styles';

const Menu = () => {
    
    const history = useHistory();
    
    const handleProfessionalType = () =>{
        history.push('/professional-type');
    } 
      
    const handleProfessional = () => {
        history.push('/professional');
    }

    return(
        <Container>
            <Box>
                <Button 
                    typeButton="icon-label-light"
                    icon={FiLayers}
                    label="Tipo"
                    onClick={handleProfessionalType}
                />
                <Button 
                    typeButton="icon-label-light"
                    icon={FiUsers}
                    label="Profissional"
                    onClick={handleProfessional}
                />  
                
            </Box>
        </Container>
    )
}

export default Menu;