import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    min-height: 100%;
    display: flex;
    justify-content: center;
`;

export const Content = styled.div`
    width: 50%;
    background-color: var(--white);
    padding: 20px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProfessionalTypeContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 40px 0;

    display: grid;

    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
`;
