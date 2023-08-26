import styled from 'styled-components/native'

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
  height: 40px;
  background-color: white;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: #e3ca0b;
  padding: 10px 30px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

export const AnimeContainer = styled.View`
    width: 80%;
    height: 50%;
`