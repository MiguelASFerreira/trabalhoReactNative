import React from 'react'
import { CardContainer, CardContent, CardImage, CardName, CardType, CardTypeName, CardTypes } from './styles'

export const CardPokemon = ({item, backType, cardType}) => {
  return (
    <CardContainer backType={backType}>
      <CardContent>
        <CardImage source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`}} /> 
      </CardContent>
      <CardName>{item.name[0].toUpperCase() + item.name.slice(1)}</CardName>
      <CardTypes>
        {cardType.map((item) => (
          <CardType key={item.slot} card={item.type.name}>
            <CardTypeName>{item.type.name[0].toUpperCase() + item.type.name.slice(1)}</CardTypeName>
          </CardType>
        ))}
      </CardTypes>
    </CardContainer>
  )
}
