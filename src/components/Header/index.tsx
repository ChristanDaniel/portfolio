import { HeaderContainer, NameContent, NavigationItens, LiContent } from './styles'

const Header = (): JSX.Element => {
  return (
    <>
      <HeaderContainer>
        <NameContent>Christian Daniel</NameContent>
        <NavigationItens>
          <LiContent>
            <a href="#Home">Home</a>
          </LiContent>
          <LiContent>
            <a href="#Sobre">Sobre Mim</a>
          </LiContent>
          <LiContent>
            <a href="#Projetos">Projetos</a>
          </LiContent>
        </NavigationItens>
      </HeaderContainer>
    </>
  )
}

export default Header
