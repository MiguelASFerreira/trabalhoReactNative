import React, { useState } from 'react'
import { Input, LoginContainer, ButtonText, LoginButton, AnimeContainer } from './styles'
import LottieView from 'lottie-react-native';
import catAnime from './anime.json'

export const Login = () => {
  return (
    <LoginContainer>
        <AnimeContainer>
            <LottieView source={catAnime} loop autoPlay />
        </AnimeContainer>
        <Input 
            placeholder='E-mail' 
        />
        <Input 
            placeholder='Senha' 
           secureTextEntry
        />
        <LoginButton>
            <ButtonText>Entrar</ButtonText>
        </LoginButton>
    </LoginContainer>
  )
}
