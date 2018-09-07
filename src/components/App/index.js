import React, { Component } from 'react'
import styled from 'styled-components'

import { Header, Game } from '..'

const StyledApp = styled.div`
  background-image: url('https://cdn.vox-cdn.com/thumbor/TzmT7EdW-0-vk8LJmPeEWccCnjI=/209x0:3139x1335/1200x800/filters:focal(133x33:635x535)/cdn.vox-cdn.com/uploads/chorus_image/image/58038545/Mortal_Engines_concept_art_large.0.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
`
StyledApp.displayName = 'StyledApp'

class App extends Component {
  render () {
    return (
      <StyledApp>
        <Header />

        <Game />
      </StyledApp>
    )
  }
}

export default App
