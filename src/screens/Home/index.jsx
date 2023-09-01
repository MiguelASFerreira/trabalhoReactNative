import React, { useEffect, useState } from 'react'
import { CardAnime } from '../../components/CardAnime/index.jsx'
import { HomeBackground, HomeHeader, HomeTitle } from './styles.js'
import { FlatList } from 'react-native'
import LottieView from 'lottie-react-native'

import { api } from '../../services/api.js'

import load from '../../json/load.json'
import back from '../../../assets/back.png'
import imageHeader from '../../../assets/background.jpg'
import { DataFormat } from '../../components/DataFormat/index.jsx'
import { CardMangas } from '../../components/CardManga/index.jsx'


export const Home = () => {
  const [animes, setAnimes] = useState([])
  const [mangas, setMangas] = useState([])
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

    async function getMangas() {
      try {
        const response = await api.get("/manga")
        setMangas(response.data.data)
        setLoad(false)
      } catch (error) {
        console.log(error)
      } finally {
        setLoad(false)
      }
    }
    getAnimes()
    getMangas()
  }, [])

  if (!animes && !mangas && load) {
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
          <HomeTitle>Mangás</HomeTitle>
          <FlatList
            horizontal
            data={mangas}
            renderItem={({item}) => <CardMangas item={item} />}
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