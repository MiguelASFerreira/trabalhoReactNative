import React from 'react';
import { FaixaContainer, FaixaText } from './styles';

export const Faixa = ({ faixa }) => {
    let value;
    let color;
    const valor = faixa.split(" - ")[0];

    switch (valor) {
        case "G":
            value = "L";
            color = "green";
            break;
        case "PG":
            value = "10";
            color = "blue";
            break;
        case "PG-13":
            value = "14";
            color = "orange";
            break;
        default:
            value = "+18";
            color = "red";
            break;
    }
    
    return (
        <FaixaContainer style={{ backgroundColor: color }}>
            <FaixaText>{value}</FaixaText>
        </FaixaContainer>
    );
}
