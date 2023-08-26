import React, { useState } from 'react'
import { Input, LoginContainer, ButtonText, LoginButton, AnimeContainer } from './styles'
import LottieView from 'lottie-react-native';
import catAnime from './anime.json'
import { Alert } from 'react-native';

export const Login = ({navigation}) => {
  const [email, setEmail] = useState()  
  const [password, setPassword] = useState()

  const onHome = () => {
    if (email === "miguel@gmail.com" && password === "1234") {
        console.log("Entrou")
        return navigation.navigate("HomeScreen")
    } 
    console.log("Erro")
    return Alert.alert("Erro", "Login Incorreto")
    
    
  }
  console.log(email)
  console.log(password)
  return (
    <LoginContainer>
        <AnimeContainer>
            <LottieView source={catAnime} loop autoPlay />
        </AnimeContainer>
        <Input 
            placeholder='E-mail' 
            onChangeText={setEmail}
            value={email}
        />
        <Input 
            placeholder='Senha' 
            secureTextEntry
            onChangeText={setPassword}
            value={password}
        />
        <LoginButton onPress={onHome}>
            <ButtonText>Entrar</ButtonText>
        </LoginButton>
    </LoginContainer>
  )
}
