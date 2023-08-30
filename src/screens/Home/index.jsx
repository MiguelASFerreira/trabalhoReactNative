import React, { useEffect, useState } from 'react'
import { CardAnime } from '../../components/CardAnime/index.jsx'
import { HomeBackground, HomeHeader, HomeTitle } from './styles.js'
import { FlatList } from 'react-native'
import LottieView from 'lottie-react-native'

import { api } from '../../services/api.js'

import laod from '../../libs/load.json'
import back from '../../../assets/back.png'
import imageHeader from '../../../assets/background.jpg'


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
        console.log(error)
      } finally {
        setLoad(false)
      }
    }
    getAnimes()
  }, [])

  if (!animes && load) {
    return <Loading />
  }

  return (
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
  )
}

const Loading = () => {
  return (
      <LottieView source={load} loop autoPlay />
  )
}