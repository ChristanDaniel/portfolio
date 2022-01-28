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

  a {
    display: inline-block;
    position: relative;
    padding: 0 0.5rem;
    height: 5rem;
    line-height: 5rem;
    color: var(--gray-300);

    transition: color 0.2s;

    &:hover {
      color: var(--white);
    }

    &.active {
      color: var(--white);
      font-weight: bold;
    }

    &.active::after {
      content: '';
      height: 3px;
      border-radius: 3px 3px 0 0;
      width: 100%;
      position: absolute;
      bottom: 1px;
      left: 0;
      background: var(--yellow-500);
    }
  }
`

export { HeaderContainer, NameContent, NavigationItens }
