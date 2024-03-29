import React from 'react'

import { InputContainer } from './styles';

function Input({value, onChange}) {
  return (
    <InputContainer>
        <input value={value} onChange={onChange} placeholder='vitor-guerra/nexus-api'/>
    </InputContainer>
  )
}

export default Input
