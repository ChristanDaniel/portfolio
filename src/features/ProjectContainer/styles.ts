import styled from 'styled-components'

const MainContainer = styled.main`
  position: relative;
`

const TitleContainer = styled.h2`
  position: Absolute;
  top: 65px;
  left: 65px;
  display: flex;
  align-items: center;
  color: #fff;

  svg {
    margin-right: 6px;
  }
`

const ProjectContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 150px 0px 50px 0px;

  img {
    height: 243px;
    width: 500px;
  }
`

const DescriptionProject = styled.div`
  h3 {
    color: #ffff;
    margin-bottom: 14px;
  }

  p {
    color: #ffff;
    min-width: 578px;
    max-width: 578px;
  }

  h4 {
    color: #ffff;
    margin: 30px 0px 18px 0px;
  }
`

const IconProject = styled.div`
  display: flex;
  gap: 26px;

  img {
    height: 50px;
    width: 50px;
  }
`

const ButtonContent = styled.div`
  display: flex;
  gap: 25px;

  #Icon-content-buttons {
    height: 40px;
    font-size: 16px;
    margin-top: 30px;
  }

  svg {
    margin-right: 5px;
  }
`

const DividingLine = styled.div`
  height: 1px;
  width: 50%;
  margin: auto;
  margin-top: 35px;
  border-bottom: 1px solid #ffff;
`

export { MainContainer, TitleContainer, ProjectContent, DescriptionProject, IconProject, ButtonContent, DividingLine }
