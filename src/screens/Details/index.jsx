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
} from './styles'
import {Duration} from '../../components/Duration'
import { Faixa } from '../../components/Faixa'
import { Season } from '../../components/Season'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { api } from '../../services/api'
import LottieView from 'lottie-react-native'
import load from '../../json/load.json'
import { SeasonText } from '../../components/Season/styles'
// import YoutubeIframe from "react-native-youtube-iframe";
import { useWindowDimensions } from 'react-native'

export const DetailsAnimes = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const { id } = route.params
  // const { width } = useWindowDimensions()
  const [anime, setAnime] = useState(null)
  const [load, setLoad] = useState(true)
  // const [playing, setPlaying] = useState(false);

  // const onStateChange = useCallback((state) => {
  //   if (state === "ended") {
  //     setPlaying(false);
  //   }
  // }, []);

  // const togglePlaying = useCallback(() => {
  //   setPlaying((prev) => !prev);
  // }, []);

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
        {/* <Line />
        <YoutubeIframe 
          play={playing}
          height={400}
          width={width}
          videoId={anime.trailer.youtube_id}
          onChangeState={onStateChange}
        />
        <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
    </DetailsContainer>
  )
}

const Loading = () => {
  return (
      <LottieView source={load} loop autoPlay />
  )
}