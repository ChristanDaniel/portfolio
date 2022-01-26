import styled from 'styled-components'

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
  min-width: 580px;
  max-width: 580px;

  h3 {
    color: #ffff;
    margin-bottom: 14px;
  }

  p {
    color: #ffff;
  }

  span {
    color: #64a5f0;
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

const ImageProjectsContent = styled.div`
  position: relative;
  width: 500px;
  height: 243px;
`

export { ProjectContent, DescriptionProject, IconProject, ButtonContent, ImageProjectsContent }
