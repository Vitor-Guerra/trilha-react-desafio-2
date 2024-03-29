import React from 'react'

import { ButtonContainer, Loading } from './styles';

function Button({onClick, loading}) {
  return(
    <>
      {loading ? (
        <ButtonContainer onClick={onClick} disabled>
          Carregando... <Loading/>
        </ButtonContainer>
      ):(
      <ButtonContainer onClick={onClick}>
        Buscar
      </ButtonContainer>
      )}
    </>
  )

}

export default Button
