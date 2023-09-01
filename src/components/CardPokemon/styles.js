import  styled, { css } from "styled-components/native";

const backgroundType = {
        grass: '#8BBE8A',
      fire: '#FFA756',
      water: '#58ABF6',
      poison: '#9F6E97',
      normal: '#B5B9C4',
      bug: '#8BD674',
      flying: '#748FC9',
      electric: '#F2CB55',
      ground: '#F78551',
      psychic: '#F66F71',
      fighting: '#D56723',
      rock: '#D4C294',
      steel: '#4C91B2',
      ice: '#61CEC0',
      ghost: '#8571BE',
      dragon: '#0A6DC4',
      dark: '#595761',
      fairy: '#f589f5',
  };

  const boxType = {
        grass: '#62B957',
      fire: '#FD7D24',
      water: '#4A90DA',
      poison: '#A552CC',
      normal: '#9DA0AA',
      bug: '#8CB330',
      flying: '#748FC9',
      electric: '#d4ad39',
      ground: '#ba663f',
      psychic: '#e0645e',
      fighting: '#c4331f',
      rock: '#a69867',
      steel: '#7082A5',
      ice: '#84DCCF',
      ghost: '#7B62A3',
      dragon: '#338EDA',
      dark: '#48414d',
      fairy: '#F6A7E9',
  };


export const CardContainer = styled.TouchableOpacity`
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