import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  margin: 0 auto;
  font-size: 24px;
  justify-content: space-around;
  display: flex;
  background: transparent;
`

function Header () {
  return (
    <StyledHeader>

      <h1>Mortal Engines Hangman</h1>

    </StyledHeader>
  )
}

export default Header
