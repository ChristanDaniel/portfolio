import styled from 'styled-components'

const MainContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 80px;
`

const PresentationContent = styled.div`
  p {
    font-size: 24px;
    margin-bottom: 8px;
    font-weight: bold;
    color: #ffff;
  }

  h1 {
    font-size: 50px;
    font-weight: bold;
    color: #ffff;
  }

  span {
    color: #3db0f7;
  }

  h2 {
    color: #ffff;
    font-weight: bold;
  }
`

const ButtonContent = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 36px;

  #about-buttons {
    height: 50px;
    font-size: 16px;
  }
`

const SocialMidiaContent = styled.ul`
  display: flex;
  margin-top: 20px;
  gap: 16px;

  svg {
    height: 40px;
    width: 40px;
    color: #ffff;
  }
`

const ImageContent = styled.div``

export { MainContainer, PresentationContent, ButtonContent, ImageContent, SocialMidiaContent }
