import styled from 'styled-components';

export const Container = styled.button`
    background: linear-gradient(82.44deg, var(--branding-second) 3.25%, var(--branding-forth) 100%);
    height: 3.5rem;
    max-width: 17.5rem;
    border: 0;
    padding: 1rem 2rem;
    color: var(--white);
    width: 100%;
    font-weight: 500;
    line-height: 1.5rem;
    border-radius: 4px;

`;

export const Outline = styled.button`
    background: var(--white);
    height: 3.5rem;
    max-width: 17.5rem;
    border: 0;
    padding: 1rem 2rem;
    color: var(--primary);
    width: 100%;
    font-weight: 500;
    line-height: 1.5rem;
    border-radius: 4px;

    transition: color 1s;

    &:hover {
        color: var(--branding-first);
    }
`;

export const OnlyIcon = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--branding-sixth);
    height: 2.75rem;
    width: 2.75rem;
    border: 0;
    padding: 0.2rem;
    color: var(--white);
    border-radius: 4px;

    transition: background-color 0.2s;

    &:hover {
        background: var(--primary-shade);
    }
`;

export const IconLabelLight = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 112px;
    height: 72px;
    background-color: var(--white);
    transition: background-color 0.2s;
    border: 0;

    &:hover {
        background-color: #F0F2F4;

        svg {
            color: var(--primary);
        }

   }

    svg {
        color: var(--icon-color);
    }

    span {
        color: var(--icon-color);
        font-weight: 400;
        font-size: 12px;
        line-height: 12px;
        margin-top: 10px;
    }
`;