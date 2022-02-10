import styled from 'styled-components'

const MainContainer = styled.main`
  width: 100%;
  height: calc(100vh - 5rem);
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 80px;

  @media screen and (max-width: 800px) {
    margin-top: 150px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const PresentationContent = styled.div`
  @media screen and (max-width: 800px) {
    display: flex;
  }

  p {
    font-size: 24px;
    margin-bottom: 8px;
    font-weight: bold;
    color: #ffff;

    @media screen and (max-width: 800px) {
      font-size: 18px;
    }
  }

  h1 {
    font-size: 50px;
    font-weight: bold;
    color: #ffff;

    @media screen and (max-width: 800px) {
      font-size: 40px;
    }
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

  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin-left: 50px;
    margin-top: 0;
  }

  svg {
    height: 40px;
    width: 40px;
    color: #ffff;

    @media screen and (max-width: 800px) {
      height: 30px;
      width: 30px;
    }
  }
`

const ImageContent = styled.div`
  @media screen and (max-width: 800px) {
    margin: 0;
  }
  margin-top: 90px;
`

export { MainContainer, PresentationContent, ButtonContent, ImageContent, SocialMidiaContent }
