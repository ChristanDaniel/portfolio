import React from 'react'

import { FiChevronsRight } from 'react-icons/fi'

import { MainContainer, AboutContent, TitleContainer, DescriptionAbout } from './styles'

const AboutContainer = (): JSX.Element => {
  return (
    <>
      <MainContainer>
        <TitleContainer>
          <FiChevronsRight /> Sobre mim
        </TitleContainer>
        <AboutContent>
          <div>
            <img src="https://github.com/ChristanDaniel.png" alt="My-Image" />
          </div>

          <DescriptionAbout>
            <p>
              Meu Nome é <span>Christian Daniel</span>, tenho 23 anos, moro em Dourados-MS.
            </p>
            <p>tenho 6 anos de experiência com atendimento ao público.</p>
            <p>estudei 4 semestre da faculdade de Matemática, eu sai no final de 2020</p>
            <p>para me dedicar a carreira de desenvolvedor Front-end.</p>
          </DescriptionAbout>
        </AboutContent>
      </MainContainer>
    </>
  )
}

export default AboutContainer
