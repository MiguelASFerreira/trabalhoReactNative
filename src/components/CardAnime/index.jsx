import React from 'react'
import { CardContainer, CardImage, CardTitle } from './styles'
import { useNavigation } from '@react-navigation/native'

export const CardAnime = ({item}) => {
  const navigation = useNavigation()
  return (
    <CardContainer onPress={() => navigation.navigate("DetailsScreenAnime", {id: item.mal_id})}>
        <CardImage source={{ uri: item.images.jpg.image_url }} />
        <CardTitle>{item.title}</CardTitle>
    </CardContainer>
  )
}
