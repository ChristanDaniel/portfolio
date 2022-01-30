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

const LiContent = styled.li`
  height: 75px;
  display: flex;
  position: relative;
  align-items: center;

  a {
    padding: 0 0.5rem;
    height: 75px;
    line-height: 80px;
    color: #fff;

    transition: 0.3s;

    &:hover {
      color: #6a98f0;
      font-weight: bold;
      border-bottom: 3px solid #6a98f0;
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
      width: 100%;
    }
  }
`

const NavigationItens = styled.ul`
  margin-right: 170px;
  display: flex;
  gap: 18px;
`

export { HeaderContainer, NameContent, NavigationItens, LiContent }
