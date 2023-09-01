import React from 'react'
import { PokemonBackground, PokemonHeader } from './styles'
import LottieView from 'lottie-react-native'

import load from '../../json/load.json'
import back from '../../../assets/back.png'
import imageHeaderPokemon from '../../../assets/red.jpg'

export const Pokemon = () => {

//   if (load) {
//     return <Loading />
//   }   
  return (
    <PokemonBackground source={back} resizeMode='repeat'>
        <PokemonHeader source={imageHeaderPokemon} />
    </PokemonBackground>
  )
}

const Loading = () => {
    return (
        <LottieView source={load} loop autoPlay />
    )
}