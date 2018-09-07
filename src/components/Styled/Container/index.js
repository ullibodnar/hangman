import styled from 'styled-components'

const Container = styled.div`
  width: 80%;
  margin: auto;
  color: #191919;
  margin: 0 auto;
  padding: 40px;
  background: hsla(0,0%,100%,0.95);
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  box-sizing: border-box;

  @media only screen and (max-width: 700px) {
    width: 100vw;
    margin: 0;
  }
`

Container.displayName = 'Container'

export default Container
