import { MainContainer, PresentationContent, ImageContent, SocialMidiaContent } from './styles'

import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

import Image from 'next/image'
import AvatarMale from '../../../public/HomeImage.png'

import AboutContainer from '../AboutContainer'
import FooterContainer from '../FooterContainer'
import ProjectContainer from '../ProjectContainer'

const HomeContainer = (): JSX.Element => {
  return (
    <>
      <MainContainer id="Home">
        <PresentationContent>
          <div>
            <p>👏 Hey, Seja bem vindo</p>
            <h1>
              Ao meu oficial Website <br />
              sou <span>Dev Front-End</span>.
            </h1>
            <p>acesse minhas redes sociais</p>
          </div>

          <SocialMidiaContent>
            <a href="https://github.com/ChristanDaniel" target="_blank" rel="noreferrer noopener">
              <li>
                <AiFillGithub />
              </li>
            </a>
            <a href="https://www.linkedin.com/in/christian-daniel-841921210/" target="_blank" rel="noreferrer noopener">
              <li>
                <AiFillLinkedin />
              </li>
            </a>
            <a href="https://www.instagram.com/christian.daniel021/" target="_blank" rel="noreferrer noopener">
              <li>
                <AiFillInstagram />
              </li>
            </a>
          </SocialMidiaContent>
        </PresentationContent>
        <ImageContent>
          <Image src={AvatarMale} alt="My-Image" width={480} height={480} layout="intrinsic" />
        </ImageContent>
      </MainContainer>
      <AboutContainer />
      <ProjectContainer />
      <FooterContainer />
    </>
  )
}

export default HomeContainer
