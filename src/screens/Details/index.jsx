import React, { useEffect, useState } from 'react'
import { DetailsContainer } from './styles'
import { useRoute } from '@react-navigation/native'
import { Text } from 'react-native'
import { api } from '../../services/api'

export const DetailsAnimes = () => {
  const route = useRoute()
  const { id } = route.params
  const [anime, setAnime] = useState([])
  const [load, setLoad] = useState(true)

  useEffect(() => {
    async function getDetailsAnime() {
        try {
            const response = await api.get(`/anime/${id}`)
            const data = response.data
            setAnime(data.data)
            setLoad(false)
        } catch (error) {
            console.log(error)
        } finally {
            setLoad(false)
        }
    }
    getDetailsAnime()
  }, [])
  
  if (load) return null

  return (
    <DetailsContainer>
        <Text>{anime.title}</Text>
    </DetailsContainer>
  )
}
