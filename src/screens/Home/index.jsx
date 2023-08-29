import React, { useEffect, useState } from 'react'
import { HomeContainer, HomeBackground, HomeHeader, HomeTitle } from './styles.js'
import { FlatList } from 'react-native'

import { api } from '../../services/api.js'

import back from '../../../assets/back.png'
import imageHeader from '../../../assets/background.jpg'
import { CardAnime } from '../../components/CardAnime/index.jsx'


export const Home = () => {
  const [animes, setAnimes] = useState([])
  const [load, setLoad] = useState(true)

  useEffect(() => {
    async function getAnimes() {
      try {
        const response = await api.get("/anime")
        setAnimes(response.data.data)
        setLoad(false)
      } catch (error) {
        console.log("API ERROR", error)
      } finally {
        setLoad(false)
      }
    }
    getAnimes()
  }, [])

  if (load) return null

  return (
    <HomeContainer>
      <HomeBackground resizeMode='repeat' source={back}>
        <HomeHeader source={imageHeader} />
        <HomeTitle>Animes</HomeTitle>
        <FlatList
          horizontal
          data={animes}
          renderItem={({item}) => <CardAnime item={item} />}
          keyExtractor={(item) => item.mal_id.toString()}
        />
      </HomeBackground>
    </HomeContainer>
  )
}

// const Loading = () => {
//   return (

//   )
// }