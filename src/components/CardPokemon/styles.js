import  styled, { css } from "styled-components/native";
import { backgroundType } from "../../libs/backgroundTypes";
import { boxType } from '../../libs/boxType'

export const CardContainer = styled.View`
    ${({ backType }) => css`
        align-items: center;
        justify-content: flex-start; 
        flex-direction: column;
        width: 380px;
        height: 500px;
        background-color: ${backgroundType[backType]};
        margin-bottom: 20px;
        border-radius: 10px;
    `} 
`

export const CardContent = styled.View`
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 100%;
    height: 250px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`

export const CardImage = styled.Image`
    width: 230px;
    height: 230px;
`

export const CardName = styled.Text`
    color: white;
    font-size: 30px;
    font-weight: bold;
`

export const CardTypes = styled.View`
    flex-direction: row;
    gap: 10px;
    margin-top: 10px;
`

export const CardType = styled.View`
    ${({ card }) => css`
        background-color: ${boxType[card]};
        padding: 10px 30px;
        border-radius: 30px;
        border: 2px solid white;
    `}
`

export const CardTypeName = styled.Text` 
    color: white;
    font-weight: bold;
`