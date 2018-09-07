import React from 'react'
import styled from 'styled-components'
import { times, length } from 'ramda'

import Letter from './Letter'
import { alphabet } from '../../state'

const StyledAlphabet = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
StyledAlphabet.displayName = 'StyledAlphabet'

function Alphabet () {
  return (
    <StyledAlphabet>
      {times(drawLetters, length(alphabet))}
    </StyledAlphabet>
  )
}

function drawLetters (idx) {
  return <Letter letter={alphabet[idx]} />
}

export default Alphabet
