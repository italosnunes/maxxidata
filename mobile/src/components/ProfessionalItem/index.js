import React from 'react';

import {Container, Title, SubTitle, Situation } from './styles';

const ProfessionalTypeItem = (props) => {
    return(
        <Container>
            <Title>{props.professional.nome}</Title>
            <SubTitle>{props.professional.professionalType.descricao}</SubTitle>
            <Situation>{props.professional.email}</Situation>
            <Situation>{props.professional.situacao ? "Ativo" : "Inativo"}</Situation>
        </Container>
    )
}

export default ProfessionalTypeItem;