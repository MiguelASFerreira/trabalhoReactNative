import styled from 'styled-components/native'
import * as Animatable from 'react-native-animatable'

export const LoginContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #161616;
`

export const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  background-color: white;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid black;
`;

export const FormContent = styled(Animatable.View)`
  align-items: center;
  justify-content: center;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  background-color: white;
  padding-top: 20px;
  width: 100%;
  height: 40%;
  bottom: 0;
  position: absolute;
`

export const LoginButton = styled.TouchableOpacity`
  background-color: #e3ca0b;
  padding: 10px 30px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

export const AnimeContainer = styled(Animatable.View)`
    width: 100%;
    height: 40%;
    margin-bottom: 200px;
`
export const ErrorMessage = styled.Text`
  color: red;
  font-size: 14px;
  font-weight: bold;
`