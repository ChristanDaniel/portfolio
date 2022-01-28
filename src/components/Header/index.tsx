import { useRouter } from 'next/router'
import React from 'react'

import { HeaderContainer, NameContent, NavigationItens } from './styles'

const Header = (): JSX.Element => {
  const { asPath } = useRouter()

  console.log(asPath)
  return (
    <>
      <HeaderContainer>
        <NameContent>Christian Daniel</NameContent>
        <NavigationItens>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Sobre">Sobre Mim</a>
          </li>
          <li>
            <a href="#Projetos">Projetos</a>
          </li>
        </NavigationItens>
      </HeaderContainer>
    </>
  )
}

export default Header
