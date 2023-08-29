import { styled } from "styled-components/native";
import * as Animatable from 'react-native-animatable'

export const WelcomeContainer = styled.View`
    flex: 1;
    background-color: #161616;
`

export const Content = styled(Animatable.View)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 100%;
    height: 40%;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    position: absolute;
    bottom: 0;
`;

export const TextWelcome = styled.Text`
    color: black;
    font-weight: bold;
    font-size: 25px;
    text-align: center;
`

export const ButtonWelcome = styled.TouchableOpacity`
    margin-top: 10px;
    padding: 15px;
    background-color: #e3ca0b;
    border-radius: 30px;
`

export const ButtonContent = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 18px;
`