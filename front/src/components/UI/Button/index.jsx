import React from 'react';


import IconClose from '../../../assets/svg/icons/close.svg';
import IconBack from '../../../assets/svg/icons/back.svg';

import { Container, OnlyIcon, Outline, IconLabelLight } from './styles';

const Button = ({
    typeButton = 'default',
    icon: Icon,
    label,
    children,
    ...rest
}) => {
    return (
        <>
            {typeButton === 'default' && (
                <Container type="button" {...rest}>
                    {children}
                </Container>
            )}
            {typeButton === 'outline' && (
                <Outline type="button" {...rest}>
                    {children}
                </Outline>
            )}
            {typeButton === 'only-icon-close' && (
                <OnlyIcon type="button" {...rest}>
                    <img src={IconClose} alt="close.svg" />
                </OnlyIcon>
            )}
            {typeButton === 'only-icon-back' && (
                <OnlyIcon type="button" {...rest}>
                    <img src={IconBack} alt="close.svg" />
                </OnlyIcon>
            )}
            {typeButton === 'icon-label-light' && (
                <IconLabelLight type="button" {...rest}>
                    <Icon size={20}/>
                    <span>{label}</span>
                </IconLabelLight>
            )}
        </>
    );
};

export default Button;
