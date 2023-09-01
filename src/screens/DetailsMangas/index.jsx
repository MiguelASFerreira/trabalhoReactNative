import React, { useEffect, useState } from 'react'
import { 
    BannerManga, 
    DetailsContainer, 
    ButtonGoBack, 
    TitleManga, 
    Line,
    CapVol,
    GeneroManga,
    GeneroName,
    GeneroText,
    SinopseContent,
    SinopseDescription,
    SinopseText,
    Type
} from './styles'
import { useRoute } from '@react-navigation/native'
import { api } from '../../services/api'
import { Ionicons } from '@expo/vector-icons'
import { DataFormat } from '../../components/DataFormat'

import LottieView from 'lottie-react-native'
import load from '../../json/load.json'

export const DetailsMangas = ({navigation}) => {
  const route = useRoute()
  const { id } = route.params
  const [manga, setManga] = useState(null)
  const [load, setLoad] = useState(true)

  useEffect(() => {
    async function getDetailsManga() {
        try {
            const response = await api.get(`/manga/${id}`)
            const data = response.data
            setManga(data.data)
            setLoad(false)
        } catch (error) {
            console.log(error)
        } finally {
            setLoad(false)
        }
    }
    getDetailsManga()
  }, [])

  if (!manga && load) {
    return <Loading />
  }

  return (
    <DetailsContainer>
        <BannerManga source={{ uri: manga.images.jpg.large_image_url}}>
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
        </BannerManga>
        <TitleManga>{manga.title}</TitleManga>
        <Type>{manga.type}</Type>
        <Line />
        <CapVol>Capitúlos: {manga.chapters ? manga.chapters : "Inderteminado"}</CapVol>
        <CapVol>Volumes: {manga.volumes ? manga.volumes : "Inderteminado"}</CapVol>
        <Line />
        <DataFormat inicio={manga.published.from} encerramento={manga.published.to} />
        <Line />
        <GeneroText>Gênero</GeneroText>
        <GeneroManga>
          {manga.genres.map((item) => {
            return (
              <GeneroName key={item.mal_id}>{item.name}</GeneroName>
            )
          })}
        </GeneroManga>
        <Line />
        <SinopseText>Sinopse</SinopseText>
        <SinopseContent>
          <SinopseDescription>{manga.synopsis}</SinopseDescription>
        </SinopseContent>
        <Line />
    </DetailsContainer>
  )
}

const Loading = () => {
    return (
        <LottieView source={load} loop autoPlay />
    )
  }