import React from 'react'
import styled from 'styled-components'

const StyledLetter = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  font-size: 34px;
  line-height: 40px;
  width: 40px;
  height: 40px;
  padding: 4px;
  margin: 4px;
  text-align: center;
  background: white;
  cursor: pointer;
  
`
StyledLetter.displayName = 'StyledLetter'

const StyledClickedLetter = StyledLetter.extend`
  color: #828282;
  border-color: #828282;
  cursor: not-allowed;
`
StyledClickedLetter.displayName = 'StyledClickedLetter'

function Letter ({ letter }) {
  return <StyledLetter>{letter}</StyledLetter>
}

export default Letter
