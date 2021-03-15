import React from 'react';

import {Container, Title, Situation } from './styles';

const ProfessionalTypeItem = (props) => {
    return(
        <Container>
            <Title>{props.professional.descricao}</Title>
            <Situation>{props.professional.situacao ? "Ativo" : "Inativo"}</Situation>
        </Container>
    )
}

export default ProfessionalTypeItem;