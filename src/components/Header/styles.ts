import styled from 'styled-components'

const HeaderContainer = styled.header`
  position: fixed;
  z-index: 10;
  height: 75px;
  width: 100%;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #000;
  color: white;
`

const NameContent = styled.h2`
  margin-left: 90px;
`

const NavigationItens = styled.ul`
  margin-right: 170px;
  display: flex;
  gap: 18px;
`

export { HeaderContainer, NameContent, NavigationItens, LiContent }
