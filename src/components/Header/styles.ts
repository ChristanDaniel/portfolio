import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 75px;
  width: 100%;
  background: #000;
  color: white;
`

const NameContent = styled.h2`
  padding-right: 660px;
`

const NavigationItens = styled.ul`
  display: flex;
  gap: 18px;
`

export { HeaderContainer, NameContent, NavigationItens }
