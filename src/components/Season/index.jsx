import React from 'react'
import { SeasonText } from './styles'

export const Season = ({season}) => {
    switch(season) {
        case 'fall':
          return <SeasonText>Temporada de Outono</SeasonText>
          
        case "winter":
           return <SeasonText>Temporada de Inverno</SeasonText>
            
        case "spring":
           return <SeasonText>Temporada de Inverno</SeasonText>
            
        case "summer":
           return <SeasonText>Temporada de Inverno</SeasonText>
    }
}
