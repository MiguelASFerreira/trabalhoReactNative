import React, { useState, useEffect } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { PokemonBackground, PokemonHeader, PokemonTitle } from './styles'
import LottieView from 'lottie-react-native'

import load from '../../json/load.json'
import back from '../../../assets/back.png'
import imageHeaderPokemon from '../../../assets/red.jpg'
import axios from 'axios'
import { CardPokemon } from '../../components/CardPokemon'

export const Pokemon = () => {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [hasMoreData, setHasMoreData] = useState(true)
  const [load, setLoad] = useState(true)

  async function getAllPokemons() {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`)
      const { results, next } = response.data
      
      const payloadPokemons = await Promise.all(
        results.map(async (pokemon) => {
          const {id, types} = await getMoreInfo(pokemon.url)

          return {
            name: pokemon.name,
            id,
            types
          }
        })
      )
      if (payloadPokemons) {
        const current = payloadPokemons
        setPokemons(prev => [...prev, ...current])

        if (next) {
          setPage(prev => prev + 20)
        } else {
          setHasMoreData(false)
        }
      }
      setLoad(false)
    } catch (error) {
      console.log(error)
    }finally {
      setLoad(false)
    }
  }
  useEffect(() => {
    getAllPokemons()
  }, [])

  async function getMoreInfo(url) {
    const response = await axios.get(url)
    const {id, types} = response.data;

    return {
      id, types
    }
  }

  if (!pokemons.length && !pokemons.types && load) {
    return <Loading />
  }   
  return (
    <PokemonBackground source={back} resizeMode='repeat'>
      <StatusBar style="light" backgroundColor='rgba(0, 0, 0, 0.7)'/>
          <FlatList 
            ListHeaderComponent={
              <>
                <PokemonHeader source={imageHeaderPokemon} />
                <PokemonTitle>Pokemon</PokemonTitle>
              </>
            }     
            ListHeaderComponentStyle={{
                width: "100%",
                marginBottom: 10
            }} 
            data={pokemons}
            renderItem={({item}) => 
              <CardPokemon 
                item={item} 
                backType={item.types[0].type.name} 
                cardType={item.types}
              />
            }
            keyExtractor={(item) => item.id.toString()}
            
            contentContainerStyle={{
              alignItems: 'center'
            }}
            onEndReached={getAllPokemons}
            onEndReachedThreshold={0.1}
            ListFooterComponent={hasMoreData ? <ActivityIndicator size={'large'} color={'white'} /> : null}
          />
    </PokemonBackground>
  )
}

const Loading = () => {
    return (
        <LottieView source={load} loop autoPlay />
    )
}