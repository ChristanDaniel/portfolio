import styled from 'styled-components'

const MainContainer = styled.main`
  background: #232323;
  position: relative;
`

const AboutContent = styled.div`
  padding: 60px 100px 100px 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }

  img {
    margin-top: 40px;
    border-radius: 100%;
    height: 200px;
    width: 200px;
    padding: 10px;
    border: 4px solid white;
  }
`

const TitleContainer = styled.h2`
  position: Absolute;
  top: 65px;
  left: 65px;
  display: flex;
  color: #fff;

  svg {
    margin-right: 6px;
  }
`

const DescriptionAbout = styled.div`
  margin-top: 40px;

  span {
    color: #3db0f7;
  }

  p {
    color: #ffff;
    margin-bottom: 10px;
  }
`

export { MainContainer, AboutContent, TitleContainer, DescriptionAbout }
