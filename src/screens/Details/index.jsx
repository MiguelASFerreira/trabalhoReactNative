import React, { useEffect, useState, useCallback } from 'react'
import { 
  DetailsContainer, 
  ButtonGoBack, 
  BannerAnime, 
  TitleAnime, 
  Episodes, 
  DurationAnime, 
  BottomRightSquare, 
  Line, 
  Type, 
  GeneroText,
  GeneroName,
  GeneroAnime,
  SinopseContent,
  SinopseDescription,
  ButtonTrailer,
} from './styles'
import {Duration} from '../../components/Duration'
import { Faixa } from '../../components/Faixa'
import { Season } from '../../components/Season'
import { useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { api } from '../../services/api'
import LottieView from 'lottie-react-native'
import load from '../../json/load.json'
import { SeasonText } from '../../components/Season/styles'
import YoutubePlayer from "react-native-youtube-iframe";
import { Button } from 'react-native'
import { View } from 'react-native'
import { ModalVideo } from '../../components/ModalVideo'
import { TouchableOpacity, Text } from 'react-native-gesture-handler'

export const DetailsAnimes = ({navigation}) => {
  const route = useRoute()
  const { id } = route.params
  const [anime, setAnime] = useState(null)
  const [load, setLoad] = useState(true)
  const [modalVisible, setModalVisible] = useState(false);
  // const [play, setPlay] = useState(false)

  
  // const onStateChange = useCallback((state) => {
  //   if (state === "ended") {
  //     setPlay(false);
  //   }
  // }, []);
  
  // const togglePlaying = useCallback(() => {
    //   setPlay((prev) => !prev);
    // }, []);

    // Função para abrir o modal
    const openModal = () => {
      setModalVisible(true);
    };
  
    // Função para fechar o modal
    const closeModal = () => {
      setModalVisible(false);
    };

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
  

  
  if (!anime && load) {
    return <Loading />
  }
  return (
    <DetailsContainer>
        <BannerAnime source={{ uri: anime.images.jpg.large_image_url}}>
          <ButtonGoBack onPress={() => navigation.goBack()}>
            <Ionicons 
              name='chevron-back'
              color="#000"
              size={40}
              style={{
                backgroundColor: "#fff",
                marginTop: 5,
                marginLeft: 10,
                borderRadius: 100
              }}
            /> 
          </ButtonGoBack>
          <BottomRightSquare>
            <Faixa faixa={anime.rating} />
          </BottomRightSquare>
        </BannerAnime>
        <TitleAnime>{anime.title || anime.title_english}</TitleAnime>
        <Season season={anime.season}/>
        <Type>{anime.type}</Type>
        <Line />
        <Episodes>Episódios: {anime.episodes || "Inderteminado"}</Episodes>
        <Line />
        <DurationAnime>
          Duração: <Duration duration={anime.duration} />
        </DurationAnime>
        <Line />
        <GeneroText>Gênero</GeneroText>
        <GeneroAnime>
          {anime.genres.map((item) => {
            return (
              <GeneroName key={item.mal_id}>{item.name}</GeneroName>
            )
          })}
        </GeneroAnime>
        <Line />
        <SeasonText>Sinopse</SeasonText>
        <SinopseContent>
          <SinopseDescription>{anime.synopsis}</SinopseDescription>
        </SinopseContent>
        <Line />
          <ButtonTrailer title='Ver Trailer' onPress={openModal}/>
          <ModalVideo 
            visible={modalVisible}
            onClose={closeModal}
            videoId={anime.trailer.youtube_id} 
          />
    </DetailsContainer>
  )
}

const Loading = () => {
  return (
      <LottieView source={load} loop autoPlay />
  )
}