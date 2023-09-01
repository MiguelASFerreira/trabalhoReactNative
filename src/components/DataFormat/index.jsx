import React from 'react'
import { DataContainer, DataText } from './styles';

export const DataFormat = ({inicio , encerramento}) => {
  const formatDate = (date) => {
    if (!date) {
      return 'Em lançamento';
    }
      
    const formattedDate = new Date(date);
    const day = formattedDate.getUTCDate();
    const month = formattedDate.getUTCMonth() + 1;
    const year = formattedDate.getUTCFullYear();
      
    return `${day}/${month}/${year}`;
  };

  return (
    <DataContainer>
        <DataText>Início: {formatDate(inicio)}</DataText>
      <DataText>Encerramento: {formatDate(encerramento)}</DataText>
    </DataContainer>
  )
}
