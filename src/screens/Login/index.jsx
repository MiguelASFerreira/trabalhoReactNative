import React, { useState } from 'react'
import { Input, LoginContainer, ButtonText, LoginButton, AnimeContainer, FormContent, ErrorMessage } from './styles'
import { useForm, Controller, FormProvider } from 'react-hook-form'
import LottieView from 'lottie-react-native';
import catAnime from './anime.json'
import { Alert } from 'react-native';

export const Login = ({navigation}) => {
  const methods = useForm();
  const onHome = (data) => {
    if (data.email === "Admin" && data.password === "123456") {
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
        <FormProvider>
        <FormContent
            delay={400}
            animation="fadeInUpBig"
          >
          <Controller
            name="email"
            control={methods.control}
            defaultValue=""
            rules={{ required: 'Email é obrigatório' }}
            render={({ field }) => (
              <Input
                placeholder="Email"
                value={field.value}
                onChangeText={field.onChange}
              />
            )}
          />
          {methods.formState.errors.email && (
          <ErrorMessage>{methods.formState.errors.email.message}</ErrorMessage>
        )}
          <Controller
          name="password"
          control={methods.control}
          defaultValue=""
          rules={{
            required: 'Senha é obrigatória',
            minLength: {
              value: 6,
              message: 'A senha deve ter pelo menos 6 caracteres',
            },
          }}
          render={({ field }) => (
            <Input
              placeholder="Senha"
              value={field.value}
              onChangeText={field.onChange}
              secureTextEntry
            />
          )}
        />
        {methods.formState.errors.password && (
          <ErrorMessage>{methods.formState.errors.password.message}</ErrorMessage>
        )}
        <LoginButton onPress={methods.handleSubmit(onHome)}>
          <ButtonText>Entrar</ButtonText>
        </LoginButton>
      </FormContent>
        </FormProvider>
    </LoginContainer>
  )
}
