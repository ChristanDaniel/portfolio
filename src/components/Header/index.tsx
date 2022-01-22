import React from 'react'

import { HeaderContainer, NameContent, NavigationItens } from './styles'

const Header = (): JSX.Element => {
  return (
    <>
      <HeaderContainer>
        <NameContent>Christian Daniel</NameContent>
        <NavigationItens>
          <li>Home</li>
          <li>About</li>
          <li>Portifolio</li>
        </NavigationItens>
      </HeaderContainer>
    </>
  )
}

export default Header
