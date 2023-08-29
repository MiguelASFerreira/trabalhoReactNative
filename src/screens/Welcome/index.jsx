import React from 'react';
import { ButtonContent, ButtonWelcome, Content, TextWelcome, WelcomeContainer } from './styles';

export const Welcome = ({navigation}) => {
  return (
      <WelcomeContainer>
        <Content 
            delay={800}
            animation="fadeInUp"
        >
            <TextWelcome>Bem-vindo</TextWelcome>
            <TextWelcome>Este incrivel aplicativo irá demonstrar a você, o universo mágico dos animes</TextWelcome>
            <ButtonWelcome onPress={() => navigation.navigate("LoginScreen")}>
              <ButtonContent>Venha ver</ButtonContent>
            </ButtonWelcome>
        </Content>
      </WelcomeContainer>
  );
};
