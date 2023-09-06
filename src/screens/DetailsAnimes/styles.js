import { styled } from "styled-components/native";

export const DetailsContainer = styled.ScrollView`
    flex: 1;
    background-color: #161616;
`

export const BannerAnime = styled.ImageBackground`
    width: 100%;
    height: 640px;
`

export const ButtonGoBack = styled.TouchableOpacity`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 57px;
    margin-right: 87%;
`

export const TitleAnime = styled.Text`
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 40px;
`

export const Episodes = styled.Text`
    text-align: center;
    color: white;
    font-size: 28px;
    font-weight: bold;
`

export const DurationAnime = styled.Text`
    text-align: center;
    color: white;
    font-size: 18px;
    font-weight: bold;
`

export const BottomRightSquare = styled.View`
  position: absolute;
  top: 60px;
  right: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;


export const Line = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid white;
`

export const Type = styled.Text`
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 20px;
`

export const GeneroText = styled.Text`
    color: white;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
`

export const GeneroAnime = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 10px;
    gap: 10px;
`

export const GeneroName = styled.Text`
    color: #000;
    background-color: #fff;
    font-weight: bold;
    padding: 8px;
    border-radius: 10px;
`

export const SinopseText = styled.Text`
    color: white;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
`

export const SinopseContent = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 2px;
    padding-right: 2px;
`

export const SinopseDescription = styled.Text`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: justify;
    font-size: 18px;
    width: 80%;
    margin-bottom: 10px;
`

export const ButtomCamp = styled.View`
    align-items: center;
    justify-content: center;
`

export const ButtonTrailer = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50px;
    background-color: white;
`

export const ButtonTitleTrailer = styled.Text`
    color: black;
    font-weight: bold;
    font-size: 20px;
`