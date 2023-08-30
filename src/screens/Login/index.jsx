import React, { useState } from 'react'
import { Input, LoginContainer, ButtonText, LoginButton, AnimeContainer, FormContent, ErrorMessage } from './styles'
import LottieView from 'lottie-react-native';
import catAnime from './anime.json'
import { Alert } from 'react-native';

export const Login = ({navigation}) => {
  const [email, setEmail] = useState()  
  const [password, setPassword] = useState()
  const [errorEmail, setErrorEmail] = useState('')  
  const [errorPassword, setErrorPassword] = useState('')

  const onHome = () => {
    if (email === undefined && password === undefined) {
      Alert.alert("Campos Não Preenchidos", "Preencha todos os campos")
    } else if (email === undefined) {
        setErrorEmail("Preencha o campo E-mail!")
        setTimeout(() => {
          setErrorEmail('')
        }, 5000);
    } else if (password === undefined) {
        setErrorPassword("Preencha o campo Senha!")
        setTimeout(() => {
          setErrorPassword('')
        }, 5000);
    } else if (email === "Admin" && password === "1234") {
        return navigation.navigate("Drawer")
    } else (
      Alert.alert("Erro", "Login Incorreto")
    )
    
  }

  return (
    <LoginContainer>
        <AnimeContainer
          delay={600}
          animation="bounceIn"
        >
            <LottieView source={catAnime} loop autoPlay />
        </AnimeContainer>
          <FormContent
            delay={400}
            animation="fadeInUpBig"
          >
            <Input 
              placeholder='E-mail' 
              onChangeText={setEmail}
              value={email}
              inputMode='email'
          />
          <ErrorMessage>{errorEmail}</ErrorMessage>
          <Input 
              placeholder='Senha' 
              secureTextEntry
              onChangeText={setPassword}
              value={password}
          />
          <ErrorMessage>{errorPassword}</ErrorMessage>
          <LoginButton onPress={onHome}>
              <ButtonText>Entrar</ButtonText>
          </LoginButton>
        </FormContent>
    </LoginContainer>
  )
}
