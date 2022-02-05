import React from 'react'

import { MainContainer, TitleContainer, DividingLine } from './styles'

import { FiChevronsRight } from 'react-icons/fi'

import Projects from '../../components/Projects'

const ProjectContainer = (): JSX.Element => {
  return (
    <>
      <MainContainer id="Projetos">
        <TitleContainer>
          <FiChevronsRight /> Meus Projetos
        </TitleContainer>

        <Projects
          name={'Note-app'}
          description={'Um bloco de notas online que armazena suas anotações no LocalStorage da sua máquina'}
          FirstImg={'https://user-images.githubusercontent.com/80167149/148600274-50d6709e-1f95-42a6-bbbb-c2918a570e21.png'}
          SecondImg={'https://user-images.githubusercontent.com/80167149/148606968-7dc64a93-2b4b-4204-b559-b149eae5ccb4.png'}
          githubLink={'https://github.com/ChristanDaniel/notes-app'}
          siteLink={'https://ig-notes.vercel.app/'}
        />

        <DividingLine />

        <Projects
          name={'Pokedex-App'}
          description={'Pokedex-app é um projeto para listagem de pokemons com o uso da API pokeapi'}
          FirstImg={'https://user-images.githubusercontent.com/80167149/150605860-40138845-5cec-433c-a2e8-7ac40458529d.png'}
          SecondImg={'https://user-images.githubusercontent.com/80167149/149855376-33ed0e98-c245-48af-beb0-82ad7ad2c8d8.png'}
          githubLink={'https://github.com/ChristanDaniel/pokedex-app'}
          siteLink={'https://pokedex-app-rust.vercel.app/'}
        />

        <DividingLine />

        <Projects
          name={'Store-App'}
          description={'Store-app é um projeto de uma Loja de Eletrônica aonde você pode fazer login e salvar seus itens favoritos no carrinho'}
          FirstImg={'https://user-images.githubusercontent.com/80167149/150612653-303c9289-f66f-4954-a1b6-75f757fedf8f.png'}
          SecondImg={'https://user-images.githubusercontent.com/80167149/150612655-186ba7b5-a29e-423d-8693-a6395288e89b.png'}
          githubLink={'https://github.com/ChristanDaniel/store-app'}
          siteLink={'https://igstore.vercel.app/'}
        />

        <DividingLine />

        <Projects
          name={'Marvel-App'}
          description={'Marvel-app é um projeto para listagem de personagem com o uso Marvel Comics API'}
          FirstImg={'https://user-images.githubusercontent.com/80167149/152647453-cf5d5dd1-3f68-40cc-b8ae-aa40a1ffde98.png'}
          SecondImg={'https://user-images.githubusercontent.com/80167149/152647455-09c6fb67-fc17-49d4-91d6-5cb632ca0014.png'}
          githubLink={'https://github.com/ChristanDaniel/marvel-app'}
          siteLink={''}
        />
      </MainContainer>
    </>
  )
}

export default ProjectContainer
