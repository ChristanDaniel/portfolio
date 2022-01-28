import React from 'react'

import { FiChevronsRight } from 'react-icons/fi'

import { MainContainer, AboutContent, TitleContainer, DescriptionAbout } from './styles'

const AboutContainer = (): JSX.Element => {
  return (
    <>
      <MainContainer id="Sobre">
        <TitleContainer>
          <FiChevronsRight /> Sobre mim
        </TitleContainer>
        <AboutContent>
          <div>
            <img src="https://github.com/ChristanDaniel.png" alt="My-Image" />
          </div>

          <DescriptionAbout>
            <p>
              Olá, Meu Nome é <span>Christian Daniel</span>, tenho 23 anos, moro em Dourados-MS.
            </p>
            <p>Estou começando agora no mundo de Desenvolvimento, no momento me focando em Front-end,</p>
            <p>sou comunicativo e assertivo, talentos que consegui por anos de experiencia</p>
            <p>em atendimento ao público. Estou a procura de novos horizontes e </p>
            <p>oportunidades. Sou bom em liderar, tomar decisões e gosto muito de </p>
            <p>aprender, sempre tentando me manter aberto a qualquer tipo de experiencia</p>
            <p>que possa me levar a algo maior.</p>
            {/* <p>tenho 6 anos de experiência com atendimento ao público.</p>
            <p>estudei 4 semestre da faculdade de Matemática, eu sai no final de 2020</p>
            <p>para me dedicar a carreira de desenvolvedor Front-end.</p> */}
          </DescriptionAbout>
        </AboutContent>
      </MainContainer>
    </>
  )
}

export default AboutContainer
