import React from 'react'
import { CardContainer, CardImage, CardTitle } from './styles'

export const CardAnime = ({item}) => {
  return (
    <CardContainer>
        <CardImage source={{ uri: item.images.jpg.image_url }} />
        <CardTitle>{item.title}</CardTitle>
    </CardContainer>
  )
}
