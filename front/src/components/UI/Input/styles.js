import styled, { css } from 'styled-components';

export const Container = styled.div`
    background: var(--white);
    border-radius: 8px 8px 0 0;
    padding: 16px;
    width: 100%;
    text-decoration: none;

    border: 1px solid #dee1e5;
    color: var(--input-text);

    display: flex;
    align-items: center;


    & + div {
        margin-top: 8px;
    }

    ${props =>
        props.isErrored &&
        css`
            border-bottom: solid 2px var(--red);
        `}

    ${props =>
        props.isFocused &&
        css`
            color: var(--primary);
            border-bottom: solid 2px var(--primary);
        `}

    ${props =>
        props.isFilled &&
        css`
            color: var(--primary);
        `}


    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: var(--input-text);
        line-height: 1.14rem;
        margin-right: 5px;

        & ::placeholder {
            color: var(--input-placeholder);
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        background: transparent;
        svg {
            color: var(--input-text);
            margin: 0;
        }
    }

    svg {
        margin-right: 16px;
    }
`;

